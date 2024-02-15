import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <>
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
      <RecipeList recipeData={recipeData} />
    </>
  );
}

export default App;
