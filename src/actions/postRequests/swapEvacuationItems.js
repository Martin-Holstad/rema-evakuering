import { ref, runTransaction } from "firebase/database";
import { database } from "../../firebase/firebaseConfig";

export default async function swapListItem(itemAId, itemBId) {
  const evacuationListRef = ref(database, "evacuationList");

  await runTransaction(evacuationListRef, (currentData) => {
    if (currentData) {
      const itemA = currentData[itemAId];
      const itemB = currentData[itemBId];

      const tempIndex = itemA.position;
      currentData[itemAId].position = itemB.position;
      currentData[itemBId].position = tempIndex;
    }
    return currentData;
  });
}
