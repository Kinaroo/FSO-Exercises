import { useEffect, useState } from 'react'
import axios from 'axios'
import Find from './components/Find'
import AddForm from './components/AddForm'
import List from './components/List'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [find, setFind] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log(response.data)
      setPersons(response.data)
    })
  },[])

  const personToShow = find.length === 0
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(find.toLowerCase()))

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFind = (event) => {
    setFind(event.target.value)
  };

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (persons.some(x => x.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(nameObject))
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Find value={find} onChange={handleFind} />
      <h2>add a new</h2>
      <AddForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addName={addName}
      />
      <h2>Numbers</h2>
      <List personToShow={personToShow}/>
    </div>
  )
}

export default App