import { useState } from "react";
import toast from "react-hot-toast";




const SearchBar = ({onSubmit}) => {

    const [query, setQuery] = useState("");

    function handleSubmitInput(e) {
        setQuery(e.target.value)
    }
    function handleSubmit (e){
        e.preventDefault()
        if (!query.trim()) {
            toast.error("Please enter a search query");
            return;
    }
    onSubmit(query);
    setQuery("");
  }


  return (
    <header>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={handleSubmitInput}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
