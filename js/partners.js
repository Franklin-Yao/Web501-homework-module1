function displayPartners(){
    // Display the patner section
    var fileNames = ['bustour', 'cabinrental', 'campingadv', 'collegetours', 'rentalbike', 'tourgroup'];
    var imageList = [];
    var image;
    var div_col_open = '<div class="col-sm-6 col-md-4 col-lg-2">';
    var div_col_close = '</div>'
    var openList = "<li class='partner'>";
    var closeList = "</li>";

    //Create a loop to create 6 images
    for (var i=0; i<6; i++){
        photo = "<img src='images/partners/partner-"+fileNames[i]+".png'>";
        image = div_col_open + openList + photo + div_col_close + closeList;
        imageList.push(image)
    }
    // Display all six image codes stored in the array
    document.getElementById("partners").innerHTML = '<div class="row">' + imageList.join("") + '</div>';
}
displayPartners();
