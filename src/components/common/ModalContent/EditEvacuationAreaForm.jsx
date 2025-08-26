import styles from "./EditEvacuationAreaForm.module.css";
import { useState } from "react";
import editEvacuationAreaFormValidate from "./editEvacuationAreaFormValidate";
import editEvacuationItem from "../../../actions/postRequests/editEvacuationItem";
import DisplayMessage from "../Messages/DisplayMessage";
import ButtonLoader from "../Loaders/ButtonLoader";

export default function EditEvacuationAreaForm(props) {
  const { selectedEvacuationItem, setModalContent } = props;

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sectorError, setSectorError] = useState(false);
  const [nameError, setNameError] = useState(false);

  function submit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const validated = editEvacuationAreaFormValidate({ formData, setSectorError, setNameError });

    if (!validated) return setMessage(<DisplayMessage messageType="warning">Alle felt må fylles ut</DisplayMessage>);

    const sector = formData.get("sector").trim();
    const name = formData.get("name").trim();

    try {
      setLoading(true);

      const data = { sector, name };
      editEvacuationItem(selectedEvacuationItem.id, data);
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
    <form className={styles.form} onSubmit={submit}>
      <p className={styles.header}>Oppdater Område</p>
      {message && <div className={styles.message}>{message}</div>}
      <label htmlFor="sector">Sektor</label>
      {sectorError && <p className={styles.error}>Fyll ut sektor</p>}
      <input type="text" name="sector" id="sector" placeholder="Sektor" defaultValue={selectedEvacuationItem?.sector.toUpperCase()} />
      <label htmlFor="name">Navn</label>
      {nameError && <p className={styles.error}>Fyll ut navn</p>}
      <input type="text" name="name" id="name" placeholder="Navn" defaultValue={selectedEvacuationItem?.name} />
      <div className={styles.buttons}>
        <button>{loading ? <ButtonLoader size={16} /> : "Oppdater"}</button>
        <div className={styles.cancleButton} onClick={() => handleCancle()}>
          Avbryt
        </div>
      </div>
    </form>
  );
}
