export default (code = "") => {
  let success = false;
  try {
    JSON.parse(code);
    success = true;
  } catch (err) {}
  return success;
};
