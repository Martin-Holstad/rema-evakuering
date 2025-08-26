import styles from "./EvacuationCheckList.module.css";
import { useContext, useState } from "react";
import { PanelContext } from "../../context/PanelContext";
import TopBar from "./TopBar";
import NotEvacuatedButton from "./ActionButtons/NotEvacuatedButton";
import EvacuatedButton from "./ActionButtons/EvacuatedButton";
import EvacuationItemMenu from "./EvacuationItemMenu";

export default function EvacuationCheckList() {
  const { evacuationList, selectedEvacuationItem, setSelectedEvacuationItem } = useContext(PanelContext);

  const [menuOpen, setMenuOpen] = useState(false);

  function handleItemClick(evacuationItem) {
    if (evacuationItem.position === selectedEvacuationItem?.position) {
      setSelectedEvacuationItem(null);
      setMenuOpen(false);
    } else {
      setSelectedEvacuationItem(evacuationItem);
      setMenuOpen(true);
    }
  }

  return (
    <ul className={styles.ul}>
      <TopBar />
      {evacuationList.length === 0 && <div className={styles.emptyListMessage}>Ingen områder å vise</div>}
      {evacuationList.map((evacuationItem) => {
        const { id, evacuated, sector, name } = evacuationItem;
        return (
          <li key={id}>
            <div className={`${styles.area} ${selectedEvacuationItem?.id === id ? styles.selected : ""}`} onClick={() => handleItemClick(evacuationItem)} id="evacuationItem">
              <p>{sector.toUpperCase()}</p>
              <p>-</p>
              <p>{name}</p>
            </div>
            <div className={styles.actionButtons}>
              <NotEvacuatedButton id={id} evacuated={evacuated} />
              <EvacuatedButton id={id} evacuated={evacuated} />
            </div>
          </li>
        );
      })}
      <EvacuationItemMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </ul>
  );
}
