$('#workDiv').click(function(e){
    $('.bg').css('background-image', 'url(images/Work.png)')
    $('.customNavBar').css('background-color', 'rgb(23 24 23)')
    $('.nav-link').attr('style','color:white !important');
    $('#'+e.target.id).attr('style','color:#da8072 !important');
    $('.galleryView').css('display', 'flex')
})