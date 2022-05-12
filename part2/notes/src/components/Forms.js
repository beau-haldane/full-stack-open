import React from 'react'

const loginForm = (
  handleLogin, 
  username, 
  setUsername,
  password,
  setPassword
  ) => {
  return (
    <form onSubmit={handleLogin}>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  )
}

const noteForm = (
  addNote,
  newNote,
  handleNoteChange
) => {
  return (
    <form onSubmit={addNote}>
      <input
        value={newNote}
        onChange={handleNoteChange}
      />
      <button type="submit">save</button>
    </form> 
  )
}

export default { loginForm, noteForm }