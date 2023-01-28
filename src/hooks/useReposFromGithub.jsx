import { useEffect, useState } from 'react'

const useReposFromGithub = ({ url }) => {
  const [repos, setRepos] = useState()

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setRepos(data.length))
  }, [])

  return { repos }
}
export default useReposFromGithub
