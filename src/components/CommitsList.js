import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/commits.module.css'
import Commit from './Commit'

const CommitsList = ({ url }) => {

  const [commits, setCommits] = useState([])


  useEffect(() => {
    axios.get(url)
      .then(res => setCommits(res.data))
      .catch(err => console.error(err))
  })

  return (
    <div className={styles.commitsList}>
      {commits.map(commit => {
        return (
          <Commit key={commit.sha} commit={commit} />
        )
        })}
    </div>
  )
}

export default CommitsList;