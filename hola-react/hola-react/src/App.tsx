import React, { useState, useEffect } from 'react'
import "bulma/css/bulma.min.css"
import './App.css'
import UserForm, { UserFormState } from './forms/User'

type User = UserFormState & { id: number }
function App() {

  const [users, setUsers] = useState<User[]>([])

  async function fetchUsers() {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: User[] = await reponse.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers()
  }, [])


  return (
    <div className="App">
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <UserForm handleSubmit={user => setUsers([...users, { ...user, id: Date.now() }])} />
    </div>
  );
}

export default App


