import Repo from './Repo'
import styles from '../styles/repos.module.css'

const RepoList = ({ repos }) => {

  return (
    <div className={styles.repoList}>
      {repos.map(repo => {
        return (
          <Repo key={repo.id} repo={repo} />
        )
        })}
    </div>
  )
}

export default RepoList;