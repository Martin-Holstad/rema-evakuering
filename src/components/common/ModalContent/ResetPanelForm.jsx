import styles from "./ResetPanelForm.module.css";
import { useState } from "react";
import resetPanel from "../../../actions/postRequests/resetPanel";
import DisplayMessage from "../Messages/DisplayMessage";
import ButtonLoader from "../Loaders/ButtonLoader";
export default function ResetPanelForm(props) {
  const { setModalContent, evacuationList, setAppMessage } = props;

  const [loading, setLoading] = useState(false);

  async function handleReset() {
    try {
      setLoading(true);
      resetPanel(evacuationList);
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
    <div className={styles.form}>
      <p className={styles.header}>Tilbakestille Skjema</p> <p className={styles.info}>Vil du tilbakestille?</p>
      <div className={styles.buttons}>
        <button className={styles.resetButton} onClick={() => handleReset()}>
          {loading ? <ButtonLoader size={16} /> : "ja"}
        </button>
        <div className={styles.cancleButton} onClick={() => handleCancle()}>
          Nei
        </div>
      </div>
    </div>
  );
}
