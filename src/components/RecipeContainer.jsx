import styles from "./recipecontainer.module.css";

function RecipeContainer({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
export default RecipeContainer;
