//selecting buttons
var homeBTN = document.getElementById("menuBar-home-btn")
var livestreamBTN = document.getElementById("menuBar-livestream-btn")
var giveBTN = document.getElementById("menuBar-give-btn")
var aboutusBTN = document.getElementById("menuBar-about-btn")
var churchBTN = document.getElementById("menuBar-church-btn")
var eventsBTN = document.getElementById("menuBar-events-btn")
var galleryBTN = document.getElementById("menuBar-gallery-btn")
var contactBTN = document.getElementById("menuBar-contact-btn")
var donationBTN = document.getElementById("menuBar-give-partnership-btn")
var testimonyBTN = document.getElementById("menuBar-about-many-testimony")
var themandateBTN = document.getElementById("menuBar-about-many-themandate")
var activitiesBTN = document.getElementById("menuBar-about-many-activities")
var themeofthemonthBTN = document.getElementById("menuBar-about-many-themeofthemonth")
var themeoftheyearBTN = document.getElementById("menuBar-about-many-themeoftheyear")
var prayerrequestBTN = document.getElementById("menuBar-about-many-prayerrequest")
var addressBTN = document.getElementById("menuBar-contact-address-btn")
var paypalBTM =document.getElementById("mainbody-button")
//adding event listeners
homeBTN.addEventListener("click", () => {
  location.replace("/")
})
paypalBTM.addEventListener("click", () => {
  location.replace("https://paypal.me/pastorgloriaemuan")
})
livestreamBTN.addEventListener("click", () => {
  location.replace("/livestream");
})
giveBTN.addEventListener("click", () => {
  location.replace("/give");
})
activitiesBTN.addEventListener("click", () =>{
  location.replace("/activities")
})
aboutusBTN.addEventListener("click", () => {
  location.replace("/about-us")
})
churchBTN.addEventListener("click", () => {
  location.replace("/church-ministries")
})
eventsBTN.addEventListener("click", () => {
  location.replace("/events")
})

galleryBTN.addEventListener("click", () => {
  location.replace("/gallery")
})
contactBTN.addEventListener("click", () => {
  location.replace("/contact-us")
})
donationBTN.addEventListener("click", () => {
  location.replace("/donation")
})
testimonyBTN.addEventListener("click", () => {
  location.replace("/testimony")
})
themandateBTN.addEventListener("click", () => {
  location.replace("/themandate")
})
themandateBTN.addEventListener("click", () => {
  location.replace("/themandate")
})
themeofthemonthBTN.addEventListener("click", () => {
  location.replace("/themeofthemonth")
})
themeoftheyearBTN.addEventListener("click", () => {
  location.replace("/themeoftheyear")
})
prayerrequestBTN.addEventListener("click", () => {
  location.replace("/prayerrequest")
})
addressBTN.addEventListener("click", () => {
  location.replace("/address")
})

// pop down menu
function showGiveBar(){
  var bar = document.getElementById('menuBar-give-partnership').style;
  bar.visibility = "visible";
}
function hideGiveBar(){
  var bar = document.getElementById('menuBar-give-partnership').style;
  bar.visibility = "hidden";
}
function showAboutBar(){
  var bar = document.getElementById('menuBar-about-many').style;
  bar.visibility = "visible";
}
function hideAboutBar(){
  var bar = document.getElementById('menuBar-about-many').style;
  bar.visibility = "hidden";
}
function showContactBar(){
  var bar = document.getElementById('menuBar-contact-address').style;
  bar.visibility = "visible";
}
function hideContactBar(){
  var bar = document.getElementById('menuBar-contact-address').style;
  bar.visibility = "hidden";
}
