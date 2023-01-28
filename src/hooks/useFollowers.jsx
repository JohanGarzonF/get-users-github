import { useEffect, useState } from 'react'

const useFollowers = ({ urlFollowers }) => {
  const [followers, setFollowers] = useState()

  useEffect(() => {
    fetch(urlFollowers)
      .then(res => res.json())
      .then(data => setFollowers(data.length))
  }, [])

  return { followers }
}
export default useFollowers
