import { ref, remove } from "firebase/database";
import { database } from "../../firebase/firebaseConfig";

export default async function deleteItem(id) {
  const evacuationListItem = ref(database, `evacuationList/${id}`);

  await remove(evacuationListItem);
}
