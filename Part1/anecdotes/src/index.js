import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//Displays headings for sections
const Display = ({title}) => <h1>{title}</h1>

//Displays number of votes for the selected and highest voted anecdotes
const VotesDisplay = ({allVotes}) => <div>Has {allVotes} votes</div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [allVotes, setVotes] = useState(new Uint8Array(6))
  const [highest, setHighest] = useState(0)

  const handleAnecdoteClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVoteClick = () => {
    const newVotes = [...allVotes]
    newVotes[selected] += 1
    setVotes(newVotes)

    //Updates value for highest vote value when required
    newVotes.forEach(value => {
      if (value > highest) {
        setHighest(value)
      }
    })
  }


  return (
    <div>
      <Display title={"Anecdote of the day"} />
      {props.anecdotes[selected]}
      <VotesDisplay allVotes={allVotes[selected]} />
      <Button text={"Vote"} onClick={handleVoteClick} />
      <Button text={"Next anecdote"} onClick={handleAnecdoteClick} />

      <Display title={"Anecdote with most votes"} />
      {props.anecdotes[allVotes.indexOf(highest)]}
      <VotesDisplay allVotes={highest} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)