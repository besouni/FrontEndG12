function f1(){
   document.cookie = "user=Beso";
}

f1();

function f2(){
   c = document.cookie;
   console.log(c);
}

// f2();

function getcookie(){
   c = document.cookie;
   console.log(c);
}

function setCookie(){
   var name = document.getElementById("name").value; 
   var value = document.getElementById("value").value; 
   var time = document.getElementById("time").value; 
   var d = new Date();
   d.setTime(d.getTime()+(time*1000));
   console.log(d);
   var cTime = d;
   document.cookie = name + "=" + value + "; expires=" + cTime + "; path=/Week13";
}

function setstorage(){
   sessionStorage.setItem("user", "Beso");
}

function getstorage(){
   console.log(sessionStorage.getItem("user"));
}

function removestorage(){
   console.log(sessionStorage.removeItem("user"));
}