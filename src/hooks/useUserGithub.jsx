import { useEffect, useState } from 'react'

const USERS_ENDPOINT_GITHUB = 'https://api.github.com/search/users?q=YOUR_NAME'

export const useUserGithub = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    fetch(USERS_ENDPOINT_GITHUB)
      .then(res => res.json())
      .then(data => {
        const { items } = data
        setUsers(items)
      })
  }, [])

  return { users }
}
