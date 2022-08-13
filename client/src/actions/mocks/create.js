import mocksClient from "../../globals/mocksClient";

export default async (mock) => mocksClient("/", "POST", mock);
