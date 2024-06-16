$(function () {
    $('.fixed_container').css({
        'width': '960px',
        'margin': '0 auto',
        'position': 'relative',
        'background-color': 'blue'
    });
    $('#column-left').css({
        'width': '470px',
        'position': 'absolute',
        'height': '1000px',
        'background-color': 'blue'
    });
    $('#column-right').css({
        'width': '470px',
        'position': 'absolute',
        'left': '490px',
        'height': '1000px',
        'background-color': 'blue'
    });
    $('#innerContainer').css({
        'width': '390px',
        'margin': '0 40px 0',
        'height': '540px'
    })
    $('#toDoForm').css({
        'width': '470px',
        'height': '540px',
        'background-color': 'white'
    });
    $('#fieldDescription').css({
        'font-size': '14px',
        'color': '#9ca4b9',
        // 'margin': '30px 0 0',
        'padding': '50px 0 10px'
    })
})
