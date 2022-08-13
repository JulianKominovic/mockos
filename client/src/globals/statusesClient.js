export default (term = "") =>
  fetch("/api/v1/statuses" + term)
    .then((res) => res.json())
    .catch((err) => console.log(err));
