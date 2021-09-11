import fetch from "node-fetch";

const response = await fetch("https://api.kanye.rest/", {
  method: "GET",
});
const resData = await response.json();

console.log(resData);

if (!response.ok) {
  throw new Error("Something went wrong!");
}

//   import fetch from "node-fetch";

// fetch("https://api.kanye.rest/", {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.error(err);
//   });
