const slides = [
    "images/myArt/baukehh.svg", 
    "images/myArt/customcut.svg", 
    "images/myArt/dress.svg", 
    "images/myArt/icompuTek.svg", 
    "images/myArt/kitty.svg",
    "images/myArt/Shepherd.svg",
    "images/myArt/owl.svg", 
    "images/myArt/rooted.svg", 
    "images/myArt/mtree.svg", 
    "images/myArt/vine.svg"];
const texts = [
    "Logo design for Baukeh <br> Photography",
    "Logo design for a business <br> specialized in custom <br> tailored suits ",
    "Dance outfits sewn for a Vietnamese New Year dance <br> 2014 ",
    "Logo design for iCompuTek, LLC, a computer repair shop",
    "Pastel drawing of a Kitten <br> 2' x 3'",
    "'The Good Shepherd' <br> 5-piece acrylic on canvas <br> (3 ft X 6ft), 2016",
    "Custom design macarons <br> 'Scrappy the Owl'",
    "T-shirt design for SouthEast <br> Eucharistic Youth Leaders <br> Conference ",
    "Custom design macarons <br> Christmas  ",
    "“I’m the Vine; You are the Branches” <br> acrylic on wood for Archdiocese of <br> Atlanta Eucharistic <br> Congress 2011"];

var maxIndex = slides.length -1;
var imageIndex = Math.round(maxIndex/2);

function next() {
    imageIndex++;
    if (imageIndex > maxIndex) {
        imageIndex=0;
    }
    loadImage(imageIndex);
}

function back() {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex= maxIndex;
    }
    loadImage(imageIndex);
}

function loadImage(indx) {
    if (indx == null) {
        indx = imageIndex;
    }
    var imagePath = slides[indx];
    var imgElement = document.getElementById("art");
    imgElement.src=imagePath;
    updateText(indx) 
}


function updateText(indx) {
    const textElement = document.getElementById("contentText");
    textElement.innerHTML = texts[indx];
}