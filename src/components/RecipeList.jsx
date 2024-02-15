function RecipeList(props) {
  const { recipeData } = props;
  return (
    <div>
      {recipeData.map((recipe) => (
        <h1>{recipe.title}</h1>
      ))}
    </div>
  );
}

export default RecipeList;
