import { useState } from 'react';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  function handleSubmitInput(e) {
    setQuery(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) {
      toast.error('Please enter a text on English');
      return;
    }
    onSubmit(query);
    setQuery('');
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleSubmitInput}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
      
    </header>
  );
};

export default SearchBar;
