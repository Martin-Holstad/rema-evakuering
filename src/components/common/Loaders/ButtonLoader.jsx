import styles from "./ButtonLoader.module.css";
import FontAwesome from "../Icons/FontAwesome";

export default function ButtonLoader(size) {
  return <FontAwesome className={styles.gear} color="white" fontSize={size} icon="faGear" />;
}
