export default (hasError, focused) => {
  if (!hasError && focused) return "#17C964";
  if (hasError) return "#F31260";
  if (focused) return "white";
  return "#313538";
};
