import Search from './components/Search'
import RepoList from './components/RepoList'
import { useState } from 'react'
import styles from './styles/app.module.css'

function App() {

  const [org, setOrg] = useState('Netflix');

  const handleSubmit = (input) => {
    setOrg(input);
  }

  const upperCaseOrg = (name) => {
    const firstLetter = name.charAt(0);
    const upperCaseLetter = firstLetter.toUpperCase();
    const restOfWord = name.substr(1);
    return upperCaseLetter + restOfWord;
  }

  return (
    <div className="App">
      <Search handleSubmit={handleSubmit}/>
      <h1 className={styles}>{upperCaseOrg(org)}</h1>
      <RepoList org={org}/>
    </div>
  );
}

export default App;
