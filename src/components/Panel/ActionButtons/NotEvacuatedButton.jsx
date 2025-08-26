import styles from "./NotEvacuatedButton.module.css";
import editItem from "../../../actions/postRequests/editEvacuationItem";

export default function NotEvacuatedButton(props) {
  const { evacuated, id } = props;

  async function handleNotEvacuatedButton(id) {
    try {
      editItem(id, { evacuated: false });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.button} aria-label="unmark area as evacuated" onClick={() => handleNotEvacuatedButton(id)}>
      <div className={!evacuated ? styles.dot : styles.inActive}></div>
    </div>
  );
}
