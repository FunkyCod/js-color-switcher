const startRandomBodyBackgroundColor = document.querySelector('button[data-start]');
const stopRandomBodyBackgroundColor = document.querySelector('button[data-stop]');
startRandomBodyBackgroundColor.addEventListener('click', getStart);
stopRandomBodyBackgroundColor.addEventListener('click', getStop);

function getStart() {
    startRandomBodyBackgroundColor.setAttribute("disabled", "true");
    stopRandomBodyBackgroundColor.removeAttribute("disabled");
    timerId = setInterval(() => {document.body.style.background = getRandomHexColor();
    }, 1000);
    console.log('Меняем цвет раз в 1 секунду');
}

function getStop() {
    stopRandomBodyBackgroundColor.setAttribute("disabled", "true");
    startRandomBodyBackgroundColor.removeAttribute("disabled");
    clearInterval(timerId);
    console.log('Остановка изменения цвета');
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
