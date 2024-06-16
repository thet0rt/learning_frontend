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