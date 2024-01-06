// SearchBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchBar.module.css';

const SearchBar = ({ search, handleSearchChange, handleSearchSubmit }) => {
  return (
    <div className={styles.search__container}>
      <button className={styles.search__button} onClick={handleSearchSubmit}>
        <FontAwesomeIcon className={styles.search__icon} icon={faSearch} />
      </button>
      <input
        type="text"
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
        className={styles.search__input}
      />
    </div>
  );
};

export default SearchBar;


