import React from 'react'
import styles from '../styles/commits.module.css'

const Commits = ({ commit }) => {

  return (
    <div className={styles.commit}>
      <div>{commit.commit.message}</div><br/>
      <div><b>Author:</b> {commit.commit.author.name}</div><br/>
      <div><b>Hash:</b> {commit.sha}</div><br/>
      <div><b>Date:</b> {commit.commit.author.date.substring(0,commit.commit.author.date.length-10)}</div>
    </div>
  )
}

export default Commits;