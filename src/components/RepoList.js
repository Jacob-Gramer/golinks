import React, { useEffect, useState } from 'react'
import Repo from './Repo'
import axios from 'axios'

const RepoList = ({ org }) => {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/orgs/${org}/repos`)
      .then(res => setRepos(res.data))
      .catch(err => console.error(err))
  })

  return (
    <div>
      {repos.map(repo => {
        return (
          <Repo repo={repo} />
        )
      })}
    </div>
  )
}

export default RepoList;