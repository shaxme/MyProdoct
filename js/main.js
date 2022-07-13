var elBody = document.querySelector("body");
var elBtn = document.querySelector(".changer");

0
elBtn.addEventListener('click', function(){
  elBody.classList.toggle("dark");
})


let elHeader = document.querySelector(".header");
let elMenu   = document.querySelector(".header__menu");
elMenu.addEventListener('click', function(){
  elHeader.classList.toggle("header--active");
  elBody.classList.toggle("overflow")
})
function myFunction(x) {
  x.classList.toggle("change");
}



let elQuest1 = document.querySelector(".question__box1");
let elItem1 = document.querySelector(".question__item1");
elQuest1.addEventListener('click', function(){
  elItem1.classList.toggle("ask1")
})


let elQuest2 = document.querySelector(".question__box2");
let elItem2 = document.querySelector(".question__item2");
elQuest2.addEventListener('click', function(){
  elItem2.classList.toggle("ask2");
})

let elQuest3 = document.querySelector(".question__box3");
let elItem3 = document.querySelector(".question__item3");
elQuest3.addEventListener('click', function(){
  elItem3.classList.toggle("ask3");
})

let elQuest4 = document.querySelector(".question__box4");
let elItem4 = document.querySelector(".question__item4");
elQuest4.addEventListener('click', function(){
  elItem4.classList.toggle("ask4");
})