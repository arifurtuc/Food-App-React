import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <>
      <Nav />
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
      <RecipeList recipeData={recipeData} />
    </>
  );
}

export default App;
