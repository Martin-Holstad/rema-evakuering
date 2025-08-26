import styles from "./AddEvacuationAreaButton.module.css";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import FontAwesome from "../../common/Icons/FontAwesome";
import AddEvacuationAreaForm from "../../common/ModalContent/AddEvacuationAreaForm";
import ActionButton from "../../common/Buttons/ActionButton";

export default function AddEvacuationAreaButton() {
  const { setModalContent } = useContext(AppContext);

  function handleClick() {
    setModalContent(<AddEvacuationAreaForm />);
  }

  return (
    <ActionButton className={styles.actionButton} ariaLabel="add evacuation area" onClick={handleClick}>
      <FontAwesome icon="faPlus" fontSize={20} color="white" />
    </ActionButton>
  );
}
