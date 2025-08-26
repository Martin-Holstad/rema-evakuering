import styles from "./EditEvacuationAreaButton.module.css";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { PanelContext } from "../../../context/PanelContext";
import FontAwesome from "../../common/Icons/FontAwesome";
import EditEvacuationAreaForm from "../../common/ModalContent/EditEvacuationAreaForm";
import ActionButton from "../../common/Buttons/ActionButton";

export default function EditEvacuationAreaButton() {
  const { setModalContent } = useContext(AppContext);
  const { selectedEvacuationItem } = useContext(PanelContext);

  function handleClick() {
    setModalContent(<EditEvacuationAreaForm selectedEvacuationItem={selectedEvacuationItem} setModalContent={setModalContent} />);
  }

  return (
    <ActionButton className={styles.actionButton} ariaLabel="edit evacuation area" onClick={handleClick}>
      <FontAwesome icon="faPenToSquare" fontSize={20} color="white" />
    </ActionButton>
  );
}
