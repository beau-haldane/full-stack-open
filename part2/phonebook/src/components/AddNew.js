import React from 'react'

const AddNew = ({addPersons, newName, handleNumberChange, handleNameChange, newNumber}) => {
    return(
        <div>
            <h2>Add New</h2>
            <form onSubmit={addPersons}>
                <div>
                Name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                Number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddNew