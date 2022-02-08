import React from 'react'

const Numbers = ({persons, filter, deletePerson}) => {
    return(
        <div>
            <h2>Numbers</h2>
            {
                persons.filter(person => person.name
                .toLowerCase()
                .includes(filter.toLowerCase()))
                .map(person => 
                <p key={person.name}>
                    {person.name} - {person.number}
                    <button onClick={() => deletePerson(person.id)}>Delete</button>
                </p>
                )
            }
        </div>
    )
}

export default Numbers