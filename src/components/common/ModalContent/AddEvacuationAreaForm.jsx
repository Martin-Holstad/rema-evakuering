import styles from "./AddEvacuationAreaForm.module.css";
import { useState, useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import addToEvacuationList from "../../../actions/postRequests/addToEvacuationList";
import addEvacuationAreaFormValidate from "./addEvacuationAreaFormValidate";
import DisplayMessage from "../Messages/DisplayMessage";
import ButtonLoader from "../Loaders/ButtonLoader";

export default function AddEvacuationAreaForm() {
  const { setModalContent } = useContext(AppContext);

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sectorError, setSectorError] = useState(false);
  const [nameError, setNameError] = useState(false);

  async function submit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const validated = addEvacuationAreaFormValidate({ formData, setSectorError, setNameError });

    if (!validated) return setMessage(<DisplayMessage messageType="warning">Alle felt må fylles ut</DisplayMessage>);

    const sector = formData.get("sector").trim();
    const name = formData.get("name").trim();

    try {
      setLoading(true);
      const data = { sector: sector, name: name, evacuated: false };
      addToEvacuationList(data);
      setModalContent("");
    } catch (error) {
      console.log(error);
      setMessage(<DisplayMessage messageType="error">En feil oppstod. Vennligst prøv igjen.</DisplayMessage>);
    } finally {
      setLoading(false);
    }
  }

  function handleCancle() {
    setModalContent("");
  }

  return (
    <form className={styles.form} onSubmit={(event) => submit(event)}>
      <p className={styles.header}>Legg til Område</p>
      {message && <div className={styles.message}>{message}</div>}
      <label htmlFor="sector">Sektor</label>
      {sectorError && <p className={styles.error}>Fyll ut sektor</p>}
      <input type="text" name="sector" id="sector" placeholder="Sektor" />
      <label htmlFor="name">Navn</label>
      {nameError && <p className={styles.error}>Fyll ut navn</p>}
      <input type="text" name="name" id="name" placeholder="Navn" />
      <div className={styles.buttons}>
        <button>{loading ? <ButtonLoader size={16} /> : "Legg til"}</button>
        <div className={styles.cancleButton} onClick={() => handleCancle()}>
          Avbryt
        </div>
      </div>
    </form>
  );
}
