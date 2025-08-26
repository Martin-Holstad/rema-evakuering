import { ref, push, runTransaction } from "firebase/database";
import { database } from "../../firebase/firebaseConfig";

export default async function addToEvacuationList(data) {
  const evacuationListRef = ref(database, "evacuationList");
  const highestPositionRef = ref(database, "evacuationListDetails/highestPosition");

  const newIndex = await runTransaction(highestPositionRef, (currentPosition) => {
    return (currentPosition || 0) + 1;
  });

  await push(evacuationListRef, { ...data, position: newIndex.snapshot.val() });
  return true;
}
