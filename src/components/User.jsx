import useFollowers from '../hooks/useFollowers'
import useReposFromGithub from '../hooks/useReposFromGithub'

const User = ({ user }) => {
  const { repos } = useReposFromGithub({ url: user.repos_url })
  const { followers } = useFollowers({ urlFollowers: user.followers_url })

  return (
    <>
      <article>
        <div className='img-user'>
          <img src={user.avatar_url} alt='user avatar from github' />
          <h2>{user.login}</h2>
        </div>
        <span className='line-separator-user'>{' '}</span>
        <ul className='info-git-user'>
          <li><i className='fa-solid fa-users fa-xs'>{' '}</i> Followers {followers}</li>
          <li><i className='fa-solid fa-book fa-xs'>{' '}</i>  Repositories {repos}</li>
        </ul>
      </article>
      <div className='container-github-link'>
        <a className='github-link' href={user.html_url} title='Go to github profile' target='_blank' rel='noopener noreferrer'>
          <span className='label-link-user'>Go to github</span>
          <i className='fa-brands fa-github fa-2xl'>{' '}</i>
        </a>
      </div>
    </>
  )
}
export default User
