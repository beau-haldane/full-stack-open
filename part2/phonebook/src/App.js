import React, { useState, useEffect }  from 'react'
import Numbers from './components/Numbers'
import AddNew from './components/AddNew'
import Search from './components/Search'
import Notification from './components/Notification'
import Error from './components/Error'
import personService from './services/persons'

const App = () => {

  // ----- States ----- //
    
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState (null)
  const [errorMessage, setErrorMessage] = useState (null)
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

// ----- Functions -----//


  // -- Delete Person -- //
  const deletePerson = (id) => {
    const personName = persons.filter(person => person.id === id)[0].name

    if (window.confirm(`Delete ${personName}?`)) {

      console.log(`${personName} deleted`);

      setPersons(persons.filter(person => person.id !== id))
      
      personService
        .deletePerson(id)
        .catch(error => {
          setErrorMessage(
            `${personName} has already been deleted`
            
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })

    }
  }

  // -- Add Person -- //
  const addPersons = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    // Check if person already exists
    if (persons
      .map(person => person.name)
      .includes(newName)
    ){
      // If so, update their number
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const updatePerson = persons.filter(person => person.name === newName)[0]
        updatePerson.number = newNumber

        // Display number update notification

        setNotificationMessage(
          `${updatePerson.name} updated`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)

        personService
        .update(updatePerson.id, personObject)
        .then(response => {
          setPersons(persons)
        })
      }
    } else { 
      // Add new person
      console.log(`${personObject.name} added`);
      personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
      })

      // Display person added notification

      setNotificationMessage(
        `${personObject.name} added`
      )
      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
 
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
      <Notification message={notificationMessage} />
      <Error errorMessage={errorMessage} />
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