import styles from "./ResetPanelButton.module.css";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { PanelContext } from "../../../context/PanelContext";
import FontAwesome from "../../common/Icons/FontAwesome";
import ResetPanelForm from "../../common/ModalContent/ResetPanelForm";
import ActionButton from "../../common/Buttons/ActionButton";

export default function ResetPanelButton() {
  const { setModalContent, setAppMessage } = useContext(AppContext);
  const { evacuationList } = useContext(PanelContext);

  function handleReset() {
    setModalContent(<ResetPanelForm setModalContent={setModalContent} evacuationList={evacuationList} setAppMessage={setAppMessage} />);
  }

  return (
    <ActionButton className={styles.actionButton} ariaLabel="reset panel" onClick={handleReset}>
      <FontAwesome icon="faArrowsRotate" fontSize={20} color="white" />
    </ActionButton>
  );
}
