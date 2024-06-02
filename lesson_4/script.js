// Еще способ печати - прям на страничку будет выводить
document.write("TEST !");
// Пишем функции
function printRandomNumbers() {
    console.log(Math.random());
}
printRandomNumbers();
// set_timeout выполняет код с задержкой
setTimeout(printRandomNumbers, 1500);
// set_interval выполняет некий код каждый промежуток времени
setInterval(printRandomNumbers, 1500)