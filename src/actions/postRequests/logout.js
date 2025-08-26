import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

export default async function logout() {
  await signOut(auth);
  return true;
}
