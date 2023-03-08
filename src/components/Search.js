import { useState } from 'react'

const Search = ({ handleSubmit }) => {

  const [input, setInput] = useState('');

  const handleInput = (e) => {
    const { value } = e.target
    setInput(value)
  }

  return (
    <>
      <input
        value={input}
        placeholder='Search Bar'
        onChange={handleInput}></input>
      <button
        type='submit'
        onClick={() => {
          handleSubmit(input);
          setInput('');
        }}>go</button>
    </>
  )
}

export default Search;