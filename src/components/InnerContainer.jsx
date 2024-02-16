import styles from "./innercontainer.module.css";

function InnerContainer({ children }) {
  return <div className={styles.innnerContainer}>{children}</div>;
}

export default InnerContainer;
