/* ########## Delay Time For Functions ########## */

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}


/* ########## NavBar Button ########## */

function dropdownlist(){
let x = document.getElementById("listclick");
if (x.className === "list") {
x.className += " responsive";
}
else{
x.className = "list";
}
}


/* ########## Show Login Form - Hide New User Form ########## */

async function showloginform(){
let fundogradiente = document.getElementById("section2");
let formnovousuario = document.getElementById("formnovousuario");
let formlogin = document.getElementById("formlogin");
console.log(formlogin.className);

if ((formlogin.className !== "displayform") && (formlogin.className !== "displayform in")) {
formnovousuario.className = "displayform out";
await delay(500);
formnovousuario.className = "displayform notdisplayform";
formlogin.className = "displayform in";
fundogradiente.className = "blackgroundred";
}
}


/* ########## Show Register Form - Hide Login Form ########## */

async function showregisterform(){
let fundogradiente = document.getElementById("section2");
let formnovousuario = document.getElementById("formnovousuario");
let formlogin = document.getElementById("formlogin");

if ((formnovousuario.className !== "displayform") && (formnovousuario.className !== "displayform in")) {
formlogin.className = "displayform out";
await delay(500);
formlogin.className = "displayform notdisplayform";
formnovousuario.className = "displayform in";
fundogradiente.className = "blackgroundblue";
}
}


/* ########## Show Register Form Tips ########## */

function showregisterformtips(){
var x = document.getElementById("userform");
if (x.className === "overflowform") {
x.className = "visibleform";
}
}


/* ########## Register Form Tips ########## */

function verifyusername(){
var userform = document.getElementById("inputuser");
var li1 = document.getElementById("item1");
var li2 = document.getElementById("item2");
var teste = (/[^a-zA-Z0-9]/g.test(userform.value));

if (teste.toString() == "false"){
if (li2.className === "itemlist") {
li2.className += " checked";
}
}
else{
li2.className = "itemlist";
}


if (userform.value.length >= 8) {
if (li1.className === "itemlist") {
li1.className += " checked";
}
}
else{
li1.className = "itemlist";
}
}