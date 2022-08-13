export default (code = 200) => {
  if (code >= 200 && code < 300) return "success";
  return "error";
};
