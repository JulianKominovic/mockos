export default (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));
  console.log(data);
};
