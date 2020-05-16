var test = require('lodash');
//console.log(test);

var array=[1,2,3,4,5,6,7,8];
console.log("without",test.without(array,8));
console.log("concat",test.concat(array,4,"a",[1],[1,2,3,[4,5,6]]));

var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var h3=document.querySelector("h3");
var body=document.getElementById("body");
var button=document.getElementById("button");

var element = document.getElementById('body'),
    style = window.getComputedStyle(element),
    bg = style.background;

    var bg1=bg.split("rgb");
     var colorval1=bg1[2];
    var colorval2=bg1[3].split(")")[0];
    

var cval1=colorval1.split("(")[1].split(",");
var cval1r=Number(cval1[0]);
var cval1g=Number(cval1[1]);
var cval1b=Number(cval1[2].split(")")[0]);


var cval2=colorval2.split("(")[1].split(",");
var cval2r=Number(cval2[0].split("(")[0]);
var cval2g=Number(cval2[1]);
var cval2b=Number(cval2[2]);


window.onload = function load()
{
h3.textContent="linear-gradient(to right,"+ colorval1 + colorval2 + "))" ;
color1.value=rgbToHex(cval1r,cval1g,cval1b);
color2.value=rgbToHex(cval2r,cval2g,cval2b);
}


function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//alert(rgbToHex(0, 51, 255)); // #0033ff

function setgradient() {

  body.style.background="linear-gradient(to right,"+ color1.value + "," + color2.value + ")" ;
  button.style.background="linear-gradient(to right,"+ color1.value + "," + color2.value + ")" ;

h3.textContent=body.style.background;

}

color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);
button.addEventListener("click",randomnumbers);


function randomnumbers()
{
	var random1=Math.floor(100000 + Math.random() * 900000);
	var random2=Math.floor(100000 + Math.random() * 900000);
	color1.value="#"+random1;
	color2.value="#"+random2;
	setgradient();
}


