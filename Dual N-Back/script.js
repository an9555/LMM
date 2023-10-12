$(document).ready(function(){
function dualnback () {
// n = level
var n = 1;
$("#head").text("Dual "+n+"-Back");
// position array
var arr = [];
// sound array
var soundarr = [];
// level length
var length = 30+n;
// constant used for calculating how many hits to generate
var oneeigth = 0.125;
// percentage of hits
var percent = 0.33-oneeigth;
var speed = 3000;
// currentstate
var currentlycurrent = false;
var currentlycurrentsound = false;
// check for match on click
var correct = 0;
var incorrect = 0;
var total = 0;
var percentagecorrect = 0;
var i = 0;
var output = {
b1: function () {
  $( "#b1" ).animate({
    opacity: 1,
  }, 145, function() {
 $( "#b1" ).animate({
    opacity: 0.25,
  }, 145, function() {

  });
  });
},
b2: function () {
  $( "#b2" ).animate({
    opacity: 1,
  }, 145, function() {
 $( "#b2" ).animate({
    opacity: 0.25,
  }, 145, function() {

  });
  });
},
b3: function () {
  $( "#b3" ).animate({
    opacity: 1,
  }, 145, function() {
 $( "#b3" ).animate({
    opacity: 0.25,
  }, 145, function() {

  });
  });
},
b4: function () {
  $( "#b4" ).animate({
    opacity: 1,
  }, 145, function() {
 $( "#b4" ).animate({
    opacity: 0.25,
  }, 145, function() {

  });
  });
},
b5: function () {
  $( "#b5" ).animate({
    opacity: 1,
  }, 145, function() {
 $( "#b5" ).animate({
    opacity: 0.25,
  }, 145, function() {

  });
  });
},
b6: function () {
  $( "#b6" ).animate({
    opacity: 1,
  }, 145, function() {
 $( "#b6" ).animate({
    opacity: 0.25,
  }, 145, function() {

  });
  });
},
b7: function () {
  $( "#b7" ).animate({
    opacity: 1,
  }, 145, function() {
 $( "#b7" ).animate({
    opacity: 0.25,
  }, 145, function() {

  });
  });
},
b8: function () {
  $( "#b8" ).animate({
    opacity: 1,
  }, 145, function() {
 $( "#b8" ).animate({
    opacity: 0.25,
  }, 145, function() {

  });
  });
},
sound1: function () {
sound1.play();
},
sound2: function () {
sound2.play();
},
sound3: function () {
sound3.play();
},
sound4: function () {
sound4.play();
},
sound5: function () {
sound5.play();
},
sound6: function () {
sound6.play();
},
sound7: function () {
sound7.play();
},
sound8: function () {
sound8.play();
}
}
var generator = {
array: function () {
arr = [];
i = 0;
var rand = 0;
var num = 0;
for (var z = 0; z < length+1; z++){
 rand = Math.random(); 
if (rand < percent) {
if (z-n < 0) {
num = Math.floor(Math.random()*(8))+1;
} else {
num = arr[z-n];
}
} else {
num = Math.floor(Math.random()*(8))+1;

}
arr.push(num);
}
soundarr = [];
for ( z = 0; z < length+1; z++){
 rand = Math.random(); 
if (rand < percent) {
if (z-n < 0) {
num = Math.floor(Math.random()*(8))+1;
} else {
num = arr[z-n];
}
} else {
num = Math.floor(Math.random()*(8))+1;

}
soundarr.push(num);
}
}

}
generator.array();
function play () {
if (currentlycurrent === true) {
incorrectping ();
incorrect++;
total = correct+incorrect;
percentagecorrect = (correct/total)*100;
percentagecorrect = percentagecorrect.toFixed(2);
$("#score").text("Score: "+percentagecorrect+"%");
//alert("missed");
} else {

}
if (currentlycurrentsound === true) {
incorrectping ();
incorrect++;
total = correct+incorrect;
percentagecorrect = (correct/total)*100;
percentagecorrect = percentagecorrect.toFixed(2);
$("#score").text("Score: "+percentagecorrect+"%");
//alert("missed");
} else {

}
if (soundarr[i] === 1) {
output.sound1();
}
if (soundarr[i] === 2) {
output.sound2();
}
if (soundarr[i] === 3) {
output.sound3();
}
if (soundarr[i] === 4) {
output.sound4();
}
if (soundarr[i] === 5) {
output.sound5();
}
if (soundarr[i] === 6) {
output.sound6();
}
if (soundarr[i] === 7) {
output.sound7();
}
if (soundarr[i] === 8) {
output.sound8();
}
if (arr[i] === 1) {
output.b1();
}
if (arr[i] === 2) {
output.b2();
}
if (arr[i] === 3) {
output.b3();
}
if (arr[i] === 4) {
output.b4();
}
if (arr[i] === 5) {
output.b5();
}
if (arr[i] === 6) {
output.b6();
}
if (arr[i] === 7) {
output.b7();
}
if (arr[i] === 8) {
output.b8();
}
i++;
       if (arr[i-1] === arr[i-n-1]) {
currentlycurrent = true;
} else {
currentlycurrent = false;
}
       if (soundarr[i-1] === soundarr[i-n-1]) {
currentlycurrentsound = true;
} else {
currentlycurrentsound = false;
}
if (i === arr.length+1) {
end();
}
}
$(document).keydown(function(e){
    if (e.keyCode == 37) { 
$("#leftarrow").css("color","#1780a9");
setTimeout(function(){ 
$("#leftarrow").css("color","white");
}, 300);
       if (currentlycurrent === true) {
correct++;
correctping();
//  alert( "good" );
currentlycurrent = false;
} else {
currentlycurrent = false;
incorrect++;
incorrectping ();
//  alert( "bad" );
}

total = correct+incorrect;
percentagecorrect = (correct/total)*100;
percentagecorrect = percentagecorrect.toFixed(2);
$("#score").text("Score: "+percentagecorrect+"%");
       return false;
    }
});
$(document).keydown(function(e){
    if (e.keyCode == 39) { 
$("#rightarrow").css("color","#1780a9");
setTimeout(function(){ 
$("#rightarrow").css("color","white");
}, 300);
       if (currentlycurrentsound === true) {
correct++;
correctping();
//  alert( "good" );
currentlycurrentsound = false;
} else {
currentlycurrentsound = false;
incorrect++;
incorrectping ();
//  alert( "bad" );
}
total = correct+incorrect;
percentagecorrect = (correct/total)*100;
percentagecorrect = percentagecorrect.toFixed(2);
$("#score").text("Score: "+percentagecorrect+"%");
       return false;
    }
});
function begin () {
countdown = setInterval(play, speed);
}
// end

function end () {
clearInterval(countdown);
setTimeout(function(){ 
if (percentagecorrect >= 80) {
n++;
length++;
} else if (percentagecorrect < 50 && n > 1) {
n--;
length--;
}
total = 0;
correct = 0;
incorrect = 0;
percentagecorrect = 100.00;
$("#score").text("Score: 100.00%");
generator.array();
$("#head").text("Dual "+n+"-Back");
$("#begin").text("click to begin");
}, 1000);
}
$("#center").click(function() {
$("#begin").text("");
begin ();
});
function correctping () {
$("#ping").css("color","green");
$("#ping").text("✓");

$( "#ping" ).animate({
    opacity: 1,
  }, 145, function() {
 $( "#ping" ).animate({
    opacity: 0.0,
  }, 145, function() {

  });
  });
}
function incorrectping () {
$("#ping").css("color","red");
$("#ping").text("✖");

$( "#ping" ).animate({
    opacity: 1,
  }, 145, function() {
 $( "#ping" ).animate({
    opacity: 0.0,
  }, 145, function() {

  });
  });
}

}
dualnback ();
});