import styles from "./Modal.module.css";
import { useContext, useRef } from "react";
import { AppContext } from "../../../context/AppContext";

export default function Modal(props) {
  const { setModalContent } = useContext(AppContext);

  const modalRef = useRef();
  const closeButtonRef = useRef();

  function closeModal(event) {
    if (event.target === modalRef.current || event.target === closeButtonRef.current) {
      setModalContent("");
    }
  }

  return (
    <div className={styles.modal} ref={modalRef} onClick={closeModal}>
      {props.children}
    </div>
  );
}
