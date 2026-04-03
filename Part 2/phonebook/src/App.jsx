import { useEffect, useState } from "react";
import Find from "./components/Find";
import AddForm from "./components/AddForm";
import List from "./components/List";
import Notification from "./components/Notification";
import PersonService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [find, setFind] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    PersonService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const personToShow =
    find.length === 0
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(find.toLowerCase()),
        );

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFind = (event) => {
    setFind(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.some((x) => x.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook. Do you wish to replace the old number instead?`,
        )
      ) {
        const person = persons.find((p) => p.name === newName);
        const changedPerson = { ...person, number: newNumber };
        PersonService.update(person.id, changedPerson)
          .then((updatedPerson) => {
            setSuccess(`Updated ${newName}`);
            setTimeout(() => {
              setSuccess(null);
            }, 5000);
            setPersons(
              persons.map((p) => (p.id === person.id ? updatedPerson : p)),
            );
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            setError(
              `Information of ${newName} has already been deleted from the server`,
            );
            setTimeout(() => {
              setError(null);
            }, 5000);
            setPersons(persons.filter((p) => p.id !== person.id));
          });
      }
    } else {
      PersonService.create(nameObject).then((returnedPersons) => {
        setSuccess(`Added ${newName}`);
        setTimeout(() => {
          setSuccess(null);
        }, 5000);
        setPersons(persons.concat(returnedPersons));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const deleteName = (id, name) => {
    if (window.confirm(`Do you wish to delete ${name}?`)) {
      PersonService.remove(id).then(() => {
        setPersons(persons.filter((p) => p.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={success} />
      <Notification message={error} />
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
      <List personToShow={personToShow} deleteName={deleteName} />
    </div>
  );
};

export default App;
