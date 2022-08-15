export default (abortSignal, method = "GET") =>
  fetch("/mocko/logs/", { abortSignal, method })
    .then((res) => res.json())
    .catch((err) => console.log(err));
