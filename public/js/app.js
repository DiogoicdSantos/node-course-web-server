console.log("Client side js file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const result = document.querySelector("#result");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        result.innerHTML = data.error;
      } else {
        result.innerHTML = data.forecast;
      }
    });
  });
});
