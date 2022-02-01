import React, { useState, useEffect }  from 'react'
import Numbers              from './components/Numbers'
import AddNew               from './components/AddNew'
import Search               from './components/Search'
import axios from 'axios'

const App = () => {

  // ----- States ----- //
    
  const [persons, setPersons] = useState([
    
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])
  console.log('render', persons.length, 'notes')

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
        addPersons          = {addPersons} 
        newName             = {newName} 
        handleNumberChange  = {handleNumberChange} 
        handleNameChange    = {handleNameChange} 
        newNumber           = {newNumber} 
      />
      <Numbers persons={persons} filter={filter} />
    </div>
  )
}

export default App