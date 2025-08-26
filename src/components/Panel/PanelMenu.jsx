import styles from "./PanelMenu.module.css";
import { useState, useRef } from "react";
import FontAwesome from "../common/Icons/FontAwesome";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import LogoutButton from "./ActionButtons/LogoutButton";
import AddEvacuationAreaButton from "./ActionButtons/AddEvacuationAreaButton";
import ResetPanelButton from "./ActionButtons/ResetPanelButton";

export default function PanelMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  function handleClickOutside(event) {
    if (menuButtonRef.current && menuButtonRef.current.contains(event.target)) return;
    setMenuOpen(false);
  }

  useOnClickOutside(menuRef, handleClickOutside);

  return (
    <>
      <div className={styles.menuButtuon} ref={menuButtonRef} onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesome icon="faGear" fontSize={25} color="rgb(100, 100, 100)" />
      </div>
      <div className={`${styles.menu} ${menuOpen ? styles.active : ""}`} ref={menuRef}>
        <div className={styles.actionButtons}>
          <ResetPanelButton />
          <AddEvacuationAreaButton />
          <hr />
          <LogoutButton />
        </div>
      </div>
    </>
  );
}
