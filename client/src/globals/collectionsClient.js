export default (term = "", method, payload) =>
  fetch("/mocko/collections" + term, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload ? JSON.stringify(payload) : undefined,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
