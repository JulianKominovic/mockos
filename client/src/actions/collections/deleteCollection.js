import collectionsClient from "../../globals/collectionsClient";

export default async (name) => collectionsClient("/", "DELETE", { name });
