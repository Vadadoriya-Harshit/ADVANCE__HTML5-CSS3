  let progressBar1 = document.querySelector("#progress-bar-1"),
    progressValue1 = document.querySelector("#progress-value-1");

let progressBar2 = document.querySelector("#progress-bar-2"),
    progressValue2 = document.querySelector("#progress-value-2");
let progressBar3 = document.querySelector("#progress-bar-3"),
    progressValue3 = document.querySelector("#progress-value-3");
 let progressBar4 = document.querySelector("#progress-bar-4"),
    progressValue4 = document.querySelector("#progress-value-4");
let progressBar5 = document.querySelector("#progress-bar-5"),
    progressValue5 = document.querySelector("#progress-value-5");
 let progressBar6 = document.querySelector("#progress-bar-6"),
    progressValue6 = document.querySelector("#progress-value-6");
let progressBar7 = document.querySelector("#progress-bar-7"),
    progressValue7 = document.querySelector("#progress-value-7");
let progressBar8 = document.querySelector("#progress-bar-8"),
    progressValue8 = document.querySelector("#progress-value-8");
let progressStartValue1 = 0,
    progressEndValue1 = 70,
    speed1 = 15;

let progress1 = setInterval(() => {
  progressStartValue1++;

  progressValue1.textContent = `${progressStartValue1}%`;
  progressBar1.style.background = `conic-gradient(#00a68e ${progressStartValue1 * 3.6}deg, #ededed 0deg)`;

  if (progressStartValue1 == progressEndValue1) {
    clearInterval(progress1);
  }
}, speed1);

let progressStartValue2 = 0,
    progressEndValue2 = 75,
    speed2 = 15;

let progress2 = setInterval(() => {
  progressStartValue2++;

  progressValue2.textContent = `${progressStartValue2}%`;
  progressBar2.style.background = `conic-gradient(#00a68e ${progressStartValue2 * 3.6}deg, #ededed 0deg)`;

  if (progressStartValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);

let progressStartValue3 = 0,
    progressEndValue3 = 69,
    speed3 = 15;

let progress3 = setInterval(() => {
  progressStartValue3++;

  progressValue3.textContent = `${progressStartValue3}%`;
  progressBar3.style.background = `conic-gradient(#00a68e ${progressStartValue2 * 3.6}deg, #ededed 0deg)`;

  if (progressStartValue3 == progressEndValue3) {
    clearInterval(progress3);
  }
}, speed2);
// 
let progressStartValue4 = 0,
    progressEndValue4 = 65,
    speed4 = 15;

let progress4 = setInterval(() => {
  progressStartValue4++;

  progressValue4.textContent = `${progressStartValue4}%`;
  progressBar4.style.background = `conic-gradient(#00a68e ${progressStartValue4 * 3.6}deg, #ededed 0deg)`;

  if (progressStartValue4 == progressEndValue4) {
    clearInterval(progress4);
  }
}, speed4);

let progressStartValue5 = 0,
    progressEndValue5 = 77,
    speed5 = 15;

let progress5 = setInterval(() => {
  progressStartValue5++;

  progressValue5.textContent = `${progressStartValue5}%`;
  progressBar5.style.background = `conic-gradient(#00a68e ${progressStartValue5 * 3.6}deg, #ededed 0deg)`;

  if (progressStartValue5 == progressEndValue5) {
    clearInterval(progress5);
  }
}, speed5);

let progressStartValue6 = 0,
    progressEndValue6 = 66,
    speed6 = 15;

let progress6 = setInterval(() => {
  progressStartValue6++;

  progressValue6.textContent = `${progressStartValue5}%`;
  progressBar6.style.background = `conic-gradient(#00a68e ${progressStartValue6 * 3.6}deg, #ededed 0deg)`;

  if (progressStartValue6 == progressEndValue6) {
    clearInterval(progress6);
  }
}, speed6);

let progressStartValue7 = 0,
    progressEndValue7 = 70,
    speed7 = 15;

let progress7 = setInterval(() => {
  progressStartValue7++;

  progressValue7.textContent = `${progressStartValue7}%`;
  progressBar7.style.background = `conic-gradient(#00a68e ${progressStartValue7 * 3.6}deg, #ededed 0deg)`;

  if (progressStartValue7 == progressEndValue7) {
    clearInterval(progress7);
  }
}, speed7);


let progressStartValue8 = 0,
    progressEndValue8 = 60,
    speed8 = 50;

let progress8 = setInterval(() => {
  progressStartValue8++;

  progressValue8.textContent = `${progressStartValue8}%`;
  progressBar8.style.background = `conic-gradient(#00a68e ${progressStartValue8 * 3.6}deg, #ededed 0deg)`;

  if (progressStartValue8 == progressEndValue8) {
    clearInterval(progress8);
  }
}, speed8);

function scroll()
{
var scrollevent = document.getElementById('b1');
const coollection = document.getElementsByTagName("li");
if(document.documentElement.scrollTop > 10)
{
  scrollevent.classList.add('div_header');
}
else{
 scrollevent.classList.remove('div_header');
}
//  model

}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementById('close');

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
var pera1 = document.getElementById('p1');
var time1 = document.getElementById('t1');
var pera2 = document.getElementById('p2');
var time2 = document.getElementById('time2');
var pera3 = document.getElementById('p3');
var time3 = document.getElementById('t3');
pera1.addEventListener('mouseover', function() {
  time1.style.background="#00a68e";
  time1.style.color="white";
  time1.style.transition=".2s";


});
pera1.addEventListener('mouseleave', function() {
  time1.style.background="white";
  time1.style.color="#00a68e";
  time1.style.transition=".2s";


});
pera2.addEventListener('mouseover', function() {
  time2.style.background="#00a68e";
  time2.style.color="white";
  time2.style.transition=".2s";


});
pera2.addEventListener('mouseleave', function() {
  time2.style.background="white";
  time2.style.color="#00a68e";
  time2.style.transition=".2s";


});
pera3.addEventListener('mouseover', function() {
  time3.style.background="#00a68e";
  time3.style.color="white";
  time3.style.transition=".2s";


});
pera3.addEventListener('mouseleave', function() {
  time3.style.background="white";
  time3.style.color="#00a68e";
  time3.style.transition=".2s";

});
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
var side = document.getElementById("mySidenav");

side.onclick = function(event) {
  if (event.target == side) {
    closeNav();
  }
  }
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
