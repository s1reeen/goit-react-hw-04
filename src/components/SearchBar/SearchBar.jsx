import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SearchBar.module.css";

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a search query!");
      return;
    }

    onSearch(query);
    setQuery("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            <FaSearch size={21} />
          </button>
        </div>
      </form>
    </header>
  );
};

export default Searchbar;
