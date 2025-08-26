import DisplayMessage from "../components/common/Messages/DisplayMessage";

export default function areAllAreasEvacuated(list, setAppMessage) {
  const amountOfEvacuatedAreas = list.filter((item) => item.evacuated === true).length;

  if (amountOfEvacuatedAreas === list.length) {
    setAppMessage({ open: true, important: true, content: <DisplayMessage messageType="success">Alle områder er evakuert.</DisplayMessage> });
  } else {
    setAppMessage((prevState) => ({ ...prevState, open: false, important: false }));
  }
}
