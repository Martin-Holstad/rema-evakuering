import styles from "./Panel.module.css";
import { useEffect, useState, useContext, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import { PanelContext } from "../../context/PanelContext";
import evacuationListListener from "../../actions/listeners/evacuationListListener";
import areAllAreasEvacuated from "../../utils/areAllAreasEvacuated";
import EvacuationCheckList from "./EvacuationCheckList";
import PanelMenu from "./PanelMenu";

export default function Panel() {
  const { setAppMessage } = useContext(AppContext);

  const [evacuationList, setEvacuationList] = useState([]);
  const [selectedEvacuationItem, setSelectedEvacuationItem] = useState(null);

  const selectedItemRef = useRef(null);

  useEffect(() => {
    selectedItemRef.current = selectedEvacuationItem;
  }, [selectedEvacuationItem]);

  useEffect(() => {
    evacuationListListener((list) => {
      setEvacuationList(list);
      areAllAreasEvacuated(list, setAppMessage);
      const updatedItem = list.find((item) => item.id === selectedItemRef.current?.id);
      setSelectedEvacuationItem(updatedItem || null);
    });
  }, []);

  return (
    <PanelContext.Provider value={{ evacuationList, setEvacuationList, selectedEvacuationItem, setSelectedEvacuationItem }}>
      <main className={styles.main}>
        <div className={styles.panel}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="rema logo" />
          </div>
          <h1>Evakuering RDØ</h1>
          <EvacuationCheckList />
          <PanelMenu />
        </div>
      </main>
    </PanelContext.Provider>
  );
}
