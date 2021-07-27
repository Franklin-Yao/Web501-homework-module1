$(document).ready(function(){
    $("tbody td").hover(function(){
        if ($(this).text() != "Not Available"){
            $(this).css('cursor', 'pointer');
        }
    });
    $("tbody td").click(function(){
        if ($(this).text() != "Not Available"){
            $(this).toggleClass("highlighted");
        }
    });
})