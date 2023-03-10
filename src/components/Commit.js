import React from 'react'
import styles from '../styles/commits.module.css'

const Commits = ({ commit }) => {

  return (
    <div className={styles.commit}>
      <span><b>Message:</b> {commit.commit.message}</span><br/><br/>
      <span><b>Author:</b> {commit.commit.author.name}</span><br/><br/>
      <span><b>Hash:</b> {commit.sha}</span><br/><br/>
      <span><b>Date:</b> {commit.commit.author.date.substring(0,commit.commit.author.date.length-10)}</span>
    </div>
  )
}

export default Commits;