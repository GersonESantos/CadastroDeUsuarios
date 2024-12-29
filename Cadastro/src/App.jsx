import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const users = [{
    id: 1,
    name: 'Gerson',
    age: 25,
    email: 'Gwe@.com'
  },
  {
    id: 2,
    name: 'maria',
    age: 5,
    email: 'maria@.com'
  }
    ,
  {
    id: 3,
    name: 'Pedro',
    age: 51,
    email: 'pedros@.com'
  }]

  return (
    <>
      <div className="container">
        <form action="">



          <h1>Cadastro De Usuarios</h1>
          <input placeholder='Nome' name='Nome' type='text' />
          <input placeholder='Idade' name='Idade' type='number' />
          <input placeholder='email' name='email' type='email' />
          <input name='button' type='submit' value='Cadastrar' />
        </form>
        {users.map(user => (

          <div key={user.id} className='card'>
            <div>
              <p>id</p>
              <p>nome: {user.name}</p>
              <p>idade: {user.age}</p>
              <p>email: {user.email}</p>
              <button>
                <img src="" alt="Lixo" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default App
