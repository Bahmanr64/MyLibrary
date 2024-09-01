import { BsSearch } from "react-icons/bs";
import styles from "./SearchBar.module.css";

function SearchBar({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="search title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={searchHandler}>
        <BsSearch />
      </button>
    </div>
  );
}

export default SearchBar;
