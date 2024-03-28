function showSection(sectionID) {
  // Получаем все секции
  var sections = document.querySelectorAll("section");

  // Скрываем все секции
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  // Отображаем выбранную секцию
  var selectedSection = document.getElementsByClassName(sectionID);
  // console.log(selectedSection)
  if (selectedSection) {
    selectedSection[0].style.display = "flex";
  }
}

//рисовалка
const canvas = document.getElementById("drawCanvas");

const ctx = canvas.getContext("2d");
let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

//телевизор

var films = document.getElementsByClassName("tvmain")[0];

function slider() {
  filmsStyle = films.currentStyle || window.getComputedStyle(films, false);
  bi = filmsStyle.backgroundImage.slice(-11, -2);

  if (bi === "film1.png") {
    films.style.backgroundImage = 'url("./images/film2.png")';
  } else if (bi === "film2.png") {
    films.style.backgroundImage = 'url("./images/film3.png")';
  } else if (bi === "film3.png") {
    films.style.backgroundImage = 'url("./images/film1.png")';
  }
}

films.addEventListener("click", slider);

//игрушки

dragObjects = document.getElementsByClassName("dragObject");
let shiftX = 0
let shiftY = 0

function onMouseMove(event) {
  event.target.style.left = event.clientX - shiftX + "px";
  event.target.style.top = event.clientY - shiftY + "px";
}

for (let elem of dragObjects) {
  elem.ondragstart = function () {
    return false;
  };

  elem.onmousedown = function (event) {
    shiftX = event.clientX - elem.getBoundingClientRect().left;
    shiftY = event.clientY - elem.getBoundingClientRect().top;
    elem.addEventListener("mousemove", onMouseMove);
  };

  elem.onmouseup = function () {
    for (let dragObject of dragObjects) {
      dragObject.removeEventListener("mousemove", onMouseMove);
    }
  };
}

// рыбки
fishclicks = document.getElementsByClassName("fishclick");

for (let elem of fishclicks) {
  elem.addEventListener('click', () => {
  elem.style.display = 'none';
  });};

// счетчик
const fishes = document.querySelectorAll('.fishclick');
const congrats = document.getElementById('congrats');
const resetButton = document.getElementById('reset-button');

let caughtFishCount = 0

fishes.forEach(elem => {
  elem.addEventListener('click', () => {
    elem.style.display = 'none';
    caughtFishCount++;

    if (caughtFishCount === fishes.length) {
      congrats.style.display = 'block';
      resetButton.style.display = 'block';
    }
  });
});

resetButton.addEventListener('click', () => {
  fishes.forEach(fish => {
    fish.style.display = 'block';
  });
  
  caughtFishCount = 0;
  congrats.style.display = 'none';
  resetButton.style.display = 'none';
});




