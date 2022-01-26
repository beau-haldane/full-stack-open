import React, { useState } from 'react'
import Numbers from './components/Numbers'
import AddNew from './components/AddNew'
import Search from './components/Search'

const App = () => {

  // ----- States ----- //
    
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // ----- Functions -----//

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const names = persons.map(person => person.name)

  const addPersons = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (names.includes(newName)){
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  // ----- Website ----- //

  return (
    <div>
      <h2>Phonebook</h2>
      <Search filter={filter} handleFilterChange={handleFilterChange} />
      <AddNew 
        addPersons={addPersons} 
        newName={newName} 
        handleNumberChange={handleNumberChange} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
      />
      <Numbers persons={persons} filter={filter} />
    </div>
  )
}

export default App