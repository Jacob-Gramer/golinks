import React from 'react'
import styles from '../styles/repos.module.css'

const Commits = ({ commit }) => {



  return (

    <div className={styles.repo} >
        <div className={styles.description}>{commit.commit.message}</div>
        <div className={styles.repoData}>
          <span>Language: {commit.commit.author.name}</span>
          <span>Stars: {commit.sha}</span>
          <span>Date: {commit.commit.author.date.substring(0,commit.commit.author.date.length-10)}</span>
        </div>
    </div>

  )
}

export default Commits;