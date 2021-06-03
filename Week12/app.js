function fk1(e){
   console.log("down "+e.keyCode)
}
function fk2(e){
   console.log("press "+e.keyCode)
}

function fk3(e){
   console.log(e)
}

function createBall(){
   ball = document.createElement("div");
   ball.classList.add("ball");
   var top = Math.floor(Math.random()*180);
   var left = Math.floor(Math.random()*680);
   ball.style.top = top+"px";
   ball.style.left = left+"px";
   ball.addEventListener("click", function(e){
      var points = document.querySelector("#points");
      var p = points.innerHTML;
      p++;
      points.innerHTML = p;
      var el = e.target;
      var parent = el.parentElement;
      parent.removeChild(el);
      // console.log(el.parentElement);
   })
   squere = document.querySelector(".square");
   squere.appendChild(ball);
}

function start(){
   st = setInterval(createBall, 500);
}

function stop(){
   clearInterval(st);
}

function f1(){
   console.log("Body");
}

function f2(){
   console.log("IMG");
}

function f3(){
   console.log("FORM");
}

function f4(){
   console.log("DIV");
}

function f5(){
   console.log("MOUSE DOWN");
}

function f6(){
   console.log("CLICK");
}