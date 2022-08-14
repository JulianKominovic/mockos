export default (term = "") =>
  fetch("/mocko/collections" + term)
    .then((res) => res.json())
    .catch((err) => console.log(err));
