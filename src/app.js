const button = document.getElementById("btn");
const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");

button.addEventListener("click", getAdvice);

function getAdvice(event) {
  const apiUrl = "https://api.adviceslip.com/advice";
  axios.get(apiUrl).then(showAdvice);
}

function showAdvice(response) {
  console.log(response);
  adviceNumber.innerHTML = response.data.slip.id;
  adviceText.innerHTML = `"${response.data.slip.advice}"`;
}
