import { ref, update } from "firebase/database";
import { database } from "../../firebase/firebaseConfig";

export default async function resetPanel(list) {
  if (!list || list.length <= 0) return;

  const evacuationListRef = ref(database);

  const updates = {};

  list.forEach((item) => {
    updates[`evacuationList/${item.id}/evacuated`] = false;
  });

  await update(evacuationListRef, updates);
}
