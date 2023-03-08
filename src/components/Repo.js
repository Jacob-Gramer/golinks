import React from 'react'

const Repo = ({ repo }) => {

  return (
    <div>
      <h3>{repo.name}</h3>
      <ul>
        <li>Language: {repo.language}</li>
        <li>Description: {repo.description}</li>
        <li>Stars: {repo.stargazers_count}</li>
        <li>Forks: {repo.forks_count}</li>
        <li>Date: {repo.created_at}</li>
      </ul>
    </div>
  )
}

export default Repo;