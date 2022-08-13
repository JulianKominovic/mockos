import mocksClient from "../../globals/mocksClient";

export default async (mock, status) =>
  mocksClient(`/${status ? "activate" : "disable"}/${mock.id}`);
