function click1(){
   // console.log("Hello JavaScript");
   var divs = document.getElementsByTagName("div");
   console.log(divs);
   divs[0].style.backgroundColor = "red";
   divs[3].classList.add("header1");
}

function click2(){
   var ps = document.getElementsByTagName("p");
   console.log(ps);
   var p1s =  document.getElementsByClassName("p1");
   console.log(p1s);
   for(let p of p1s){
      console.log(p);
      p.innerHTML = "<b>Hello CSS</b>";
      // p.innerText =  "<b>Hello CSS</b>";
   }
}

function click3(){
   var pt = document.getElementById("p-text-1");
   console.log(pt);
   pt.innerHTML = "Hello HTML";
   pt.style.backgroundColor = "yellow";
   var pt = document.getElementById("p-text-2");
   pt.innerHTML = "Hello HTML";
   pt.style.backgroundColor = "yellow";
}

function click4(){
   var in_1 =  document.getElementById("input-1");
   var p_1 = document.getElementById("p-1");
   p_1.innerHTML = in_1.value;
}

function click5(){
   var p1 = document.querySelector("#p-text-1");
   console.log(p1);
   var p2 = document.querySelector(".p1");
   console.log(p2);
   var p3 = document.querySelectorAll(".p1");
   console.log(p3);
   var p4 = document.querySelectorAll("p");
   console.log(p4);
}

function click6(){
   setTimeout(function(){
      console.log("Hello JS");
   }, 3000);
}

a = 0;
function click7(){
   k = setInterval(function(){
      console.log("Hello JS->"+a);
      a++;
   }, 2000);
}

function click8(){
   console.log(k);
   clearInterval(k);
}