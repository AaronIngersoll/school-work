PrintButton1 = new Image();
PrintButton2 = new Image();
logo1 = new Image();
logo2 = new Image();
if (document.images) {
  PrintButton1.src = "images/banner_logo/butto_1.png";
  PrintButton2.src = "images/banner_logo/button_hover.png";
  logo1.src = "images/banner_logo/logo.png";
  logo2.src = "images/banner_logo/logo_white.png";
}

var imgArray = new Array(
  "GrillLg.jpg",
  "IceCreamLg.jpg",
  "SaladLg.jpg",
  "VeggiesLg.jpg"
);

var titleArray = new Array(
  "JCW's Burger",
  "Home-Made Ice Cream",
  "Your Cousin eating Salad",
  "Your Own Garden's Veggies"
);

var imgPath = "images/Cooking/";

function swapImage(imgID) {
  var theImage = document.getElementById("theImage");
  var textDiv = document.getElementById("bottomText");

  var newImg;
  var textTitle;

  newImg = imgArray[imgID];
  theImage.src = imgPath + newImg;

  textTitle = titleArray[imgID];

  textDiv.innerHTML = textTitle;
}

function preloadImages() {
  for (var i = 0; i < imgArray.length; i++) {
    var tmpImg = new Image();
    tmpImg.src = imgPath + imgArray[i];
  }
}
