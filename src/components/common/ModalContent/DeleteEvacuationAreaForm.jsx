import styles from "./DeleteEvacuationAreaForm.module.css";
import { useState } from "react";
import deletefromoEvacuationList from "../../../actions/postRequests/deletefromoEvacuationList";
import DisplayMessage from "../Messages/DisplayMessage";
import ButtonLoader from "../Loaders/ButtonLoader";
export default function DeleteEvacuationAreaForm(props) {
  const { selectedEvacuationItem, setAppMessage, setModalContent } = props;

  const [loading, setLoading] = useState(false);

  async function handleDelete(event) {
    event.preventDefault();
    setLoading(true);
    try {
      deletefromoEvacuationList(selectedEvacuationItem.id);
      setModalContent("");
    } catch (error) {
      console.log(error);
      setAppMessage((prevState) => (prevState.important ? prevState : { ...prevState, open: true, content: <DisplayMessage messageType="error">En feil oppstod. Vennligst prøv igjen.</DisplayMessage> }));
    } finally {
      setLoading(false);
    }
  }

  function handleCancle() {
    setModalContent("");
  }

  return (
    <form className={styles.form}>
      <div className={styles.body}>
        <p className={styles.header}>Slette Område</p>
        <p className={styles.info}>Vil du slette: {selectedEvacuationItem.name}?</p>
        <div className={styles.buttons}>
          <button className={styles.deleteButton} onClick={(event) => handleDelete(event)}>
            {loading ? <ButtonLoader size={16} /> : "ja"}
          </button>
          <div className={styles.cancleButton} onClick={() => handleCancle()}>
            Nei
          </div>
        </div>
      </div>
    </form>
  );
}
