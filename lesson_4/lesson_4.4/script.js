// Код выполняется после загрузки DOM-модели, то есть всех тегов html в файле, к которому подключен этот скрипт
$(function() {
    $('#changeButton').css({
        'margin-left': '20px',
        'margin-bottom': '20px',
        'margin-top': '20px'
    }).click(function (){
        $('.news-time').css('color', 'red')
    });
})

$(function () {
    $('#changeCommentsButton').css(
        {
            'margin': '20px'
        }
    ).click(function () {
        $('.news-comments-count').each(function (){
            if ($(this).text() > 20) {
                $(this).css('color', 'blue');
                console.log($(this).text());
            }
        })
    })
})


// С помощью метода parent можно обращаться к родительскому элементу
// Метод parents просматривает всех родителей
// .next() выберет не этот элемент, а следующий. previous() - предыдущий
// .children() - ко всем элементам внутри родительского элемента

$(function (){
    $(".news-time").click(function () {
        $(this).parent().parent().css('border', '1px solid red')
    // Можно менять не только стили, но и содержимое элементов
    // }).click(function (){
    //     $(".news-item").first().html('<small>Мелкий текст</small>')
        //Можно удалить элемент
    }).click(function () {
        $('#column-left h2').remove();
        //Можно добавить элемент
    }).click(function () {
        $('#column-left').prepend('<h2>Новый заголовок новостей</h2>');
        // Добавить в конец
    }).click(function () {
        $('#column-left').append('<h2>Новый заголовок новостей</h2>');
        // Можно записать новый элемент в переменную
    }).click(function () {
        var newElement = $('<h2></h2>');
        newElement.text('Срочные новости');
        $('#column-left').prepend(newElement)
    })
})

