import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import Nav from "./components/Nav";
import "./App.css";
import RecipeContainer from "./components/RecipeContainer";
import InnerContainer from "./components/InnerContainer";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <>
      <Nav />
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
      <RecipeContainer>
        <InnerContainer>
          <RecipeList recipeData={recipeData} />
        </InnerContainer>
      </RecipeContainer>
    </>
  );
}

export default App;
