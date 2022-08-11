export default (term = "") =>
  fetch("/api/v1/collections" + term)
    .then((res) => res.json())
    .catch((err) => console.log(err));
