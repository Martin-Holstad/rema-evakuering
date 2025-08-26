import styles from "./AppMessage.module.css";
import { useRef, useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

export default function AppMessage(props) {
  const { appMessage, setAppMessage } = useContext(AppContext);

  const messageRef = useRef(null);

  function handleClickOutside() {
    if (appMessage.important) return;

    setTimeout(() => {
      setAppMessage((prevState) => ({ ...prevState, open: false }));
    }, 0);
  }

  useOnClickOutside(messageRef, handleClickOutside);

  return (
    <div className={`${styles.message} ${appMessage.open ? styles.active : ""}`} ref={messageRef}>
      {props.children}
    </div>
  );
}
