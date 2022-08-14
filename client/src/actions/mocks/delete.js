import mocksClient from "../../globals/mocksClient";

export default async (id) => mocksClient("/" + id, "DELETE");
