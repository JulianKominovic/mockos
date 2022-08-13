export default (method = "") => {
  if (method === "GET") return "secondary";
  if (method === "POST") return "success";
  if (method === "PATCH") return "warning";
  if (method === "PUT") return "primary";
  if (method === "DELETE") return "error";
  return "default";
};
