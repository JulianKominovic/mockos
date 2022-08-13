export default (term = "", method = "", payload) =>
  fetch("/api/v1/mocks" + term, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload ? JSON.stringify(payload) : undefined,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));