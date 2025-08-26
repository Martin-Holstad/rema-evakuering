import styles from "./MoveEvacuationAreaDownButton.module.css";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { PanelContext } from "../../../context/PanelContext";
import FontAwesome from "../../common/Icons/FontAwesome";
import swapEvacuationItems from "../../../actions/postRequests/swapEvacuationItems";
import DisplayMessage from "../../common/Messages/DisplayMessage";
import ActionButton from "../../common/Buttons/ActionButton";

export default function MoveEvacuationAreaDownButton() {
  const { setAppMessage } = useContext(AppContext);
  const { evacuationList, selectedEvacuationItem } = useContext(PanelContext);

  async function handleMoveDown() {
    const index = evacuationList.findIndex((item) => item.id === selectedEvacuationItem.id);

    const itemAId = selectedEvacuationItem.id;
    const itemBId = evacuationList[index + 1]?.id;

    if (!itemAId || !itemBId) return;
    try {
      swapEvacuationItems(itemAId, itemBId);
    } catch (error) {
      console.log(error);
      setAppMessage((prevState) => (prevState.important ? prevState : { ...prevState, open: true, content: <DisplayMessage messageType="error">En feil oppstod. Vennligst prøv igjen.</DisplayMessage> }));
    }
  }

  return (
    <ActionButton className={styles.actionButton} ariaLabel="move evacuation area down" onClick={handleMoveDown}>
      <FontAwesome icon="faSortDown" fontSize={20} color="white" />
    </ActionButton>
  );
}
