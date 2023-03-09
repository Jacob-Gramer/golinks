import React, { useEffect, useState } from 'react'
import Repo from './Repo'
import axios from 'axios'
import styles from '../styles/repos.module.css'

const RepoList = ({ org }) => {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/orgs/${org}/repos`)
      .then(res => setRepos(res.data))
      .catch(err => console.error(err))
  }, [org])

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