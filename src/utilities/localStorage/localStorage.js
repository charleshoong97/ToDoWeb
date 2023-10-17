export const setLocalStorage = (data) => {
  console.log(data);
  data = JSON.stringify(data);
  localStorage.setItem("state", data);
};

export const getLocalStorage = () => {
  let data = localStorage.getItem("state");
  data = JSON.parse(data);
};
