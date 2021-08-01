$(document).ready(function(){
    $("tbody td").hover(function(){
        if ($(this).text() != "Not Available"){
            $(this).css('cursor', 'pointer');
        }
    });
    $("tbody td").click(function(){
        var content = $(this).text();
        if ($(this).text() != "Not Available"){
            $(this).toggleClass("highlighted");

            if ($(this).hasClass("highlighted")){
                var col = $(this).index();
                var heading = $('thead tr th').eq(col).text();
                $('#displaySelected').css("visibility", "visible");
                $('#displaySelected').css('margin-top', '2em');
                $('#result').append('<p>' + content + ' at ' + heading + "</p>");
            }else{
                $('#result p:contains(' + content + ')').remove();
                if($('#result').has('p').length == false){
                    $('#displaySelected').css('visibility', 'hidden');
                    $('#displaySelected').css('margin-top', '0');
                }
            }
        }
    });
})