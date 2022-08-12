export default (method = "") => {
  if (method === "GET") return "secondary";
  if (method === "POST") return "success";
  if (method === "PATCH") return "warning";
  if (method === "DELETE") return "error";
};
