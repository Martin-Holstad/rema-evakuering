import styles from "./LogoutButton.module.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import FontAwesome from "../../common/Icons/FontAwesome";
import logout from "../../../actions/postRequests/logout";
import DisplayMessage from "../../common/Messages/DisplayMessage";
import ActionButton from "../../common/Buttons/ActionButton";
import ButtonLoader from "../../common/Loaders/ButtonLoader";

export default function LogoutButton() {
  const { setAppMessage } = useContext(AppContext);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    setLoading(true);
    try {
      logout();
      navigate("/");
    } catch (error) {
      setAppMessage((prevState) => (prevState.important ? prevState : { ...prevState, open: true, content: <DisplayMessage messageType="error">En feil oppstod. Vennligst prøv igjen.</DisplayMessage> }));
    } finally {
      setLoading(false);
    }
  }

  return (
    <ActionButton className={styles.actionButton} ariaLabel="logout" onClick={handleLogout}>
      {loading ? <ButtonLoader size={16} /> : <FontAwesome icon="faArrowRightFromBracket" fontSize={20} color="white" />}
    </ActionButton>
  );
}
