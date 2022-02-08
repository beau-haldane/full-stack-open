import React from 'react'

const Note = ({ note, toggleImportance }) => {
  const label = note.important
  ? 'not important' : 'important'
  
  return (
    <li class = "note">
      {note.content}
      <button class="listButtons" onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note