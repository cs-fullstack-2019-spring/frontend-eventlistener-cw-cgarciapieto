var titleButton =  document.getElementById("pElement");
var mainButton = document.getElementById("main");
var menuButton = document.getElementById("menu");

function changeBackgroundColor(e)
{
    titleButton.classList.add("blueBackground")
}

mainButton.onclick = changeBackgroundColor;