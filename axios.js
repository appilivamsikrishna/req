const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = () => {
  axios.get("https://reqres.in/api/users").then((response) => {
    console.log(response);
  });
};

const sendData = () => {
  axios
    .put(
      "https://reqres.in/api/register",
      {
        customerName: [1, 2],
        password: "request",
        username: "helloWorld",
        id: "1001",
      },
      {
        // headers: {
        //   'Content-Type': 'application/json'
        // }
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err, err.response);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
