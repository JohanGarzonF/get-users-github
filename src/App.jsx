import './App.css'
import User from './components/User'
import { useUserGithub } from './hooks/useUserGithub'

const App = () => {
  const { users } = useUserGithub()

  console.log(users)

  return (
    <div className='App'>
      <h1>App Get User from Github</h1>
      {users && (
        <ul className='list-users'>
          {
            users.map(user => (
              <li className='card-user' key={user.id}>
                <User user={user} />
              </li>
            ))
          }
        </ul>
      )}
    </div>
  )
}

export default App
