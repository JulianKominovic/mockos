export default (term = "") =>
  fetch("/api/v1/statuses")
    .then((res) => res.json())
    .catch((err) => console.log(err));
