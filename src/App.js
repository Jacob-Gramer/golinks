import Search from './components/Search'
import RepoList from './components/RepoList'
import { useState } from 'react'

function App() {

  const [org, setOrg] = useState('Netflix');

  const handleSubmit = (input) => {
    console.log(input);
    setOrg(input);
  }

  return (
    <div className="App">
      <Search handleSubmit={handleSubmit}/>
      <h1>{org}</h1>
      <RepoList org={org}/>
    </div>
  );
}

export default App;
