$(function(){
$('body').css({
    'background-color' : 'green'
})

$('p').css({
    'border' : '1px solid #999',
    'color' : 'yellow',
    'background-color' : 'grey'
})

$('img').css({
    'width' : '250px',
    'height' : '170px',
    'margin' : '20px'   
})

$('#bg').css({
    'width' : '100%',
    'height' : '100%',
     'background-color' : 'rgba(0, 0, 0, 0,5)',  
    //    bu iwtemedi
    'background-position' : 'center',
    'background-repeat' : 'no-repeat',
    'background-size' : 'contein',
    'position' : 'fixed',
    'top' : '0',
    'left' : '0',
    'display' : 'none'
})


$('img').click(function(){
    let foto = $(this).attr('src');
    
    $('#bg').css({
        'display' : 'block',
        'background-image' : `url('${foto}')`
    });
    
})
    $('bg').click(function(){

        $(this).css('diplay', 'none')}
    )



})
