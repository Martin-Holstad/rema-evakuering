import styles from "./EvacuatedButton.module.css";
import editItem from "../../../actions/postRequests/editEvacuationItem";

export default function EvacuatedButton(props) {
  const { evacuated, id } = props;

  async function handleEvacuatedButton() {
    try {
      editItem(id, { evacuated: true });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.button} aria-label="mark area as evacuated" onClick={() => handleEvacuatedButton()}>
      <div className={evacuated ? styles.dot : styles.inActive}></div>
    </div>
  );
}
