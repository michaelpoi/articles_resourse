function topFormSuccess(response){
    $('#input__forme').val('');
    $('#gmail__forme').val('');
    $('#phone__change__top').val('');
    $('#text__send').val('');
    hideForm();
    $('#form_send').css('display', 'flex');
    setTimeout(function() {
        $('#form_send').css('animation', 'slideUp 0.5s');
        }, 3000);
}

function botFormSuccess(response){
    $('#name__change').val('');
    $('#gmail__change').val('');
    $('#phone__change').val('');
    $('#text__send__bot').val('');
    $('#form_send').css('display', 'flex');
    setTimeout(function() {
        $('#form_send').css('animation', 'slideUp 0.5s');
        }, 3000);

}