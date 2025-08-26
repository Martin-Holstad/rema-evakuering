import styles from "./RemoveEvacuationAreaButton.module.css";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { PanelContext } from "../../../context/PanelContext";
import FontAwesome from "../../common/Icons/FontAwesome";
import DeleteEvacuationAreaForm from "../../common/ModalContent/DeleteEvacuationAreaForm";
import ActionButton from "../../common/Buttons/ActionButton";

export default function RemoveEvacuationAreaButton() {
  const { setModalContent, setAppMessage } = useContext(AppContext);
  const { selectedEvacuationItem } = useContext(PanelContext);
  async function handleClick() {
    setModalContent(<DeleteEvacuationAreaForm selectedEvacuationItem={selectedEvacuationItem} setAppMessage={setAppMessage} setModalContent={setModalContent} />);
  }
  return (
    <ActionButton className={styles.actionButton} ariaLabel="remove evacuation area" onClick={handleClick}>
      <FontAwesome icon="faTrash" fontSize={15} color="white" />
    </ActionButton>
  );
}
