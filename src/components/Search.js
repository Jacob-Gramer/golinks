import { useState } from 'react'
import styles from '../styles/search.module.css'

const Search = ({ handleSubmit }) => {

  const [input, setInput] = useState('');

  const handleInput = (e) => {
    const { value } = e.target
    setInput(value)
  }

  return (
    <div styles={styles}>
      <input
        value={input}
        placeholder='Search Bar'
        onChange={handleInput}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setInput(e.target.value);
            handleSubmit(input);
            setInput('');
          }
        }}></input>
      <button
        type='submit'
        onClick={() => {
          handleSubmit(input);
          setInput('');
        }}>go</button>
    </div>
  )
}

export default Search;