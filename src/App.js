import Search from './components/Search'
import RepoList from './components/RepoList'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './styles/app.module.css'

function App() {

  const [org, setOrg] = useState('Netflix');
  const [orgName, setOrgName] = useState('Netflix')
  const [repos, setRepos] = useState([]);

  const handleSubmit = (input) => {
    setOrg(input);
  }

  const upperCaseOrg = (name) => {
    const firstLetter = name.charAt(0);
    const upperCaseLetter = firstLetter.toUpperCase();
    const restOfWord = name.substr(1);
    return upperCaseLetter + restOfWord;
  }

  useEffect(() => {
    axios.get(`https://api.github.com/orgs/${org}/repos`)
      .then(res => {
        if (res.data.length > 0) {
          const sortedRepos = res.data.sort((a, b) => (b.stargazers_count - a.stargazers_count));
          setOrgName(org)
          setRepos(sortedRepos)
        } else {
          throw Error('Organization not found');
        }
      })
      .catch(err => {
        setOrg('Netflix')
        alert('Organization not found')
      })
  }, [org])

  return (
    <div className="App">
      <Search handleSubmit={handleSubmit}/>
      <h1 className={styles.orgName}>{upperCaseOrg(orgName)} Repositories</h1>
      <RepoList repos={repos}/>
    </div>
  );
}

export default App;
