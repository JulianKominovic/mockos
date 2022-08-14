export default (term = "") =>
  fetch("/mocko/statuses" + term)
    .then((res) => res.json())
    .catch((err) => console.log(err));
