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
        $('#container').toggleClass('newStyle');
    }

    // setTimeout(changeFontColor, 1000)

    $("#changeColor").on("click", function () {
        changeFontColor();
    });
});


// removeClass - удаляет класс
// toggleClass - удаляет класс, если есть, добавляет если нет

// Какие еще бывают события?
//     - on click - по нажатию
//     - on mouseover - по наведению мышки
//     - on mouseout - когда мы мышь уводим
//     - dblclick - по двойному клику


// Есть еще события клавиатуры


$(function () {

    function changeFontColor() {
        $('.container').toggleClass('newStyle');
    }

    // setTimeout(changeFontColor, 1000)

    // $("textarea").on("keydown", function (event) {
    //     changeFontColor();
    //     console.log(event.which);
    //     if (event.which < 48 || event.which > 57)
    //     {
    //         return false;
    //     }
    // }).on('focus', function () {
    //     changeFontColor();
    // }).on('blur', function () {
    //     changeFontColor();
    // });
    $("textarea").on("focus", function(){
        $(this).css('background-color', 'pink');
    });
    $("textarea").on("blur", function(){
        $(this).css('background-color', 'white');
    });

    $("a").on('click', function (){
        changeFontColor();
        return false;
    })

});

// keydown - кнопка вниз
// keyup - кнопка вверх
// keypress

