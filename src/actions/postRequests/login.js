import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function login(email, passowrd) {
  const user = await signInWithEmailAndPassword(auth, email, passowrd);

  if (!user) return null;

  return user;
}
