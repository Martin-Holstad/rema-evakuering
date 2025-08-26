import styles from "./EvacuationItemMenu.module.css";
import { useContext, useRef } from "react";
import { PanelContext } from "../../context/PanelContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import EditEvacuationAreaButton from "./ActionButtons/EditEvacuationAreaButton";
import MoveEvacuationAreaUpButton from "./ActionButtons/MoveEvacuationAreaUpButton";
import MoveEvacuationAreaDownButton from "./ActionButtons/MoveEvacuationAreaDownButton";
import RemoveEvacuationAreaButton from "./ActionButtons/RemoveEvacuationAreaButton";

export default function EvacuationItemMenu(props) {
  const { setSelectedEvacuationItem } = useContext(PanelContext);
  const { menuOpen, setMenuOpen } = props;

  const menuRef = useRef(null);

  function handleClickOutside(event) {
    const evacuationItems = document.querySelectorAll("#evacuationItem");

    const itemClicked = Array.from(evacuationItems).some((item) => item.contains(event.target));
    if (itemClicked) return;
    setMenuOpen(false);
    setSelectedEvacuationItem(null);
  }

  useOnClickOutside(menuRef, handleClickOutside);

  return (
    <div className={`${styles.menu} ${menuOpen ? styles.active : ""}`} ref={menuRef}>
      <div className={styles.actionButtons}>
        <EditEvacuationAreaButton />
        <MoveEvacuationAreaUpButton />
        <MoveEvacuationAreaDownButton />
        <hr />
        <RemoveEvacuationAreaButton />
      </div>
    </div>
  );
}
