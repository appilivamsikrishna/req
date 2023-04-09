const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = () => {
  axios.get("https://appili.gives/items").then((response) => {
    console.log(response);
  });
};

const sendData = () => {
  axios
    .put("https://appili.gives/items", {
      customerName: [1, 2],
      password: "fuck",
      username: "helloWorld",
      id: "1001",
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err, err.response);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
