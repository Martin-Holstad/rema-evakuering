export default function editFormValidate(args) {
  const { formData, setSectorError, setNameError } = args;

  const sector = formData.get("sector").trim();
  const name = formData.get("name").trim();

  if (sector.length <= 0) {
    setSectorError(true);
  }

  if (name.length <= 0) {
    setNameError(true);
  }

  if (name.length <= 0 || sector.length <= 0) return false;
  return true;
}
