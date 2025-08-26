import { database } from "../../firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";

export default async function evacuationListListener(callback) {
  const evacuationListRef = ref(database, `evacuationList`);

  onValue(evacuationListRef, (snapshot) => {
    if (!snapshot.exists()) return callback([]);

    const list = snapshot.val();
    const keys = Object.keys(list);
    let newList = [];
    keys.forEach((key) => {
      newList = [...newList, { id: key, ...list[key] }];
    });
    newList.sort((a, b) => a.position - b.position);

    callback(newList);
  });
}
