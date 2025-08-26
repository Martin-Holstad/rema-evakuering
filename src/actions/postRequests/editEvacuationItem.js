import { ref, update } from "firebase/database";
import { database } from "../../firebase/firebaseConfig";

export default async function editItem(id, data) {
  const evacuationListRef = ref(database, `evacuationList/${id}`);

  await update(evacuationListRef, { ...data });
}
