import create from "../../../actions/mocks/create";

export default (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));
  console.log(data);

  create(data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
