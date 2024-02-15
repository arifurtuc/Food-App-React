import RecipeItem from "./RecipeItem";

function RecipeList(props) {
  const { recipeData } = props;
  return (
    <div>
      {recipeData.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
