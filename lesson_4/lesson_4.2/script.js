// $ - это объект jquery. Код с $ выполнится только после того, как все теги html подгрузятся
$(function () {
    console.log($("div").text())
});

// $(function () {

//     function changeFontColor() {
//         $('#container').css({
//             'color': 'red',
//             'font-size': '18px',
//             'font-weight': 'bold'
//         })
//     }
//     setTimeout(changeFontColor, 5000)
// });

// То же самое, но через добавление класса стиля
$(function () {

    function changeFontColor() {
        $('#container').addClass('newStyle');
    }
    setTimeout(changeFontColor, 1000)
});

// removeClass - удаляет класс
// toggleClass - удаляет класс, если есть, добавляет если нет