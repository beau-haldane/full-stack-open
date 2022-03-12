const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

morgan.token('body', (req) => JSON.stringify(req.body))

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

// -- GET ROOT -- //
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

// -- GET PERSONS -- //
app.get('/api/persons', (request, response) => {
  response.json(persons)
})

// -- GET PERSON BY ID -- //
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

// -- GET INFO -- //
app.get('/info', (request, response) => {
    response.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>
    `)
})

// -- ADD PERSON TO PHONEBOOK -- //
const generateId = () => {
    return Math.floor(Math.random() * 100000);
}

app.post('/api/persons', (request, response) => {
  const newPerson = request.body

  // - CHECK FOR MISSING NAME/NUMBER - //
  if (!newPerson.name || !newPerson.number) {
    return response.status(400).json({ 
      error: 'Name or number missing' 
    })
  }
  // - CHECK FOR EXISTING PERSON - //
  
  const names = persons.map(p => p.name)

  if (names.includes(newPerson.name)) {
    return response.status(400).json({ 
        error: 'Someone with this name already exists!' 
    })
  }

  // - ADD PERSON - //
  const person = {
    name: newPerson.name,
    number: newPerson.number,
    id: generateId()
  }

  persons = persons.concat(person)

  response.json(person)

})

// -- DELETE PERSON BY ID -- //
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})