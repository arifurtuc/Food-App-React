function RecipeItem(props) {
  const { recipe } = props;
  return (
    <div>
      <img src={recipe.image} alt={recipe.title} />
      <h1>{recipe.title}</h1>
      <button>View Recipe</button>
    </div>
  );
}

export default RecipeItem;
