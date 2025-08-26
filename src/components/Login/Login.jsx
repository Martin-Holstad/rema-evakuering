import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import validate from "./validate";
import login from "../../actions/postRequests/login";
import errorHandler from "./errorHandler";
import DisplayMessage from "../common/Messages/DisplayMessage";
import ButtonLoader from "../common/Loaders/ButtonLoader";

export default function Login() {
  const [message, setMessage] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/panel");
      }
    });
  }, [location]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);

    const validated = validate({ formData, setMessage, setEmailError, setPasswordError });

    if (!validated) return;

    const email = formData.get("email").trim();
    const password = formData.get("password").trim();

    try {
      const user = await login(email, password);

      if (!user) return;
      navigate("/panel");
    } catch (error) {
      console.log(error);
      const errorObj = errorHandler(error);
      setMessage(<DisplayMessage messageType={errorObj.messageType}>{errorObj.message}</DisplayMessage>);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
        <div className={styles.logo}>
          <img src="logo.png" alt="rema logo" />
        </div>
        <h1>Logg inn</h1>
        {message && <div className={styles.message}>{message}</div>}
        <label htmlFor="email">Email</label>
        {emailError && <p className={styles.error}>Fyll in email</p>}
        <input type="text" name="email" id="email" placeholder="Email" />

        <label htmlFor="password">Passord</label>
        {passwordError && <p className={styles.error}>Fyll in passord</p>}
        <input type="password" name="password" id="password" placeholder="Passord" autoComplete="off" />

        <button>{loading ? <ButtonLoader size={16} /> : "Logg inn"}</button>
      </form>
    </main>
  );
}
