function displayPartners(){
    // Display the patner section
    var photos = [];
    var fileNames = ['bustour', 'cabinrental', 'campingadv', 'collegetours', 'rentalbike', 'tourgroup'];
    var imageList = [];
    var image;
    var openList = "<li class='partner'>";
    var closeList = "</li>";

    //Create a loop to create 6 images
    for (var i=0; i<6; i++){
        photos.push("<img src='images/partners/partner-"+fileNames[i]+".png'>");
        image = openList + photos[i] + closeList;
        imageList.push(image)
    }
    // Display all six image codes stored in the array
    document.getElementById("partners").innerHTML = imageList.join("");
}
displayPartners();
