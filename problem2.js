


function changeBlue()
{
    headerText.classList.add("blueBackground");
    headerText.innerText = "1"
}


function changeRed()
{
    headerText.classList.add("redBackground");
    headerText.innerText = "2"
}


var oneButton = document.getElementById("changeToOne");
var twoButton = document.getElementById("changeToTwo");
var headerText = document.getElementById("zero");

oneButton.addEventListener("click", changeBlue);
twoButton.addEventListener("click", changeRed);