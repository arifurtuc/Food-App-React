import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import Nav from "./components/Nav";
import "./App.css";
import RecipeContainer from "./components/RecipeContainer";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <>
      <Nav />
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
      <RecipeContainer>
        <RecipeList recipeData={recipeData} />
      </RecipeContainer>
    </>
  );
}

export default App;
