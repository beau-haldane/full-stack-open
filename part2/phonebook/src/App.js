import React, { useState, useEffect }  from 'react'
import Numbers from './components/Numbers'
import AddNew from './components/AddNew'
import Search from './components/Search'
import personService from './services/persons'

const App = () => {

  // ----- States ----- //
    
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  // ----- Functions -----//

  const deletePerson = (id) => {
    const personName = persons.filter(person => person.id === id)[0].name

    if (window.confirm(`Delete ${personName}?`)) {
      console.log(personName);
      personService
        .deletePerson(id)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const addPersons = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons
      .map(person => person.name)
      .includes(newName)
    ){
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const updatePerson = persons.filter(person => person.name === newName)[0]
        updatePerson.number = newNumber
        console.log(`${updatePerson.name} updated`);
        personService
        .update(updatePerson.id, personObject)
        .then(response => {
          setPersons(persons)
        })
      }
    } else {
      personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
      })
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }


  // ----- Website ----- //

  return (
    <div>
      <h2>Phonebook</h2>
      <Search 
        filter={filter} 
        handleFilterChange={handleFilterChange} 
      />
      <AddNew 
        addPersons          = {addPersons} 
        newName             = {newName} 
        handleNumberChange  = {handleNumberChange} 
        handleNameChange    = {handleNameChange} 
        newNumber           = {newNumber} 
      />
      <Numbers 
        persons={persons} 
        filter={filter} 
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App