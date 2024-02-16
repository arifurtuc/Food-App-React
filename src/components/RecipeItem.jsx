import styles from "./recipeitem.module.css";

function RecipeItem(props) {
  const { recipe } = props;
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={recipe.image} alt={recipe.title} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{recipe.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.itemButton}>View Recipe</button>
      </div>
    </div>
  );
}

export default RecipeItem;
