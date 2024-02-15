import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_API_KEY;

function Search(props) {
  const { recipeData, setRecipeData } = props;
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    async function fetchRecipe() {
      const apiResponse = await fetch(
        `${URL}?query=${query}&apiKey=${API_KEY}`
      );
      const data = await apiResponse.json();
      setRecipeData(data.results);
    }
    fetchRecipe();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}

export default Search;
