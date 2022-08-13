import { useContext } from "react";
import { collectionsContext } from "../../../actions/collections/store/collections.store";
import create from "../../../actions/mocks/create";

export default () => {
  const { refreshCollections } = useContext(collectionsContext);
  const search = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));
    console.log(data);

    const sendInfo = {
      ...data,
      response: {
        body: data.response_body,
        headers: {},
        statusCode: data.response_status,
        responseType: data.response_type,
      },
    };

    create(sendInfo)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => refreshCollections());
  };

  return { search };
};
