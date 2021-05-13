// console.log("Hello Script");
// n1 = 7;
// if(n1>10){
//    console.log(n1*2);
// }else{
//    console.log(n1*3);
// }

// for(i=0; i<10; i++){
//    console.log("I="+i);
// }

// m  =  [34, "JavaScript", true, 35.9, -9.8, 'G'];
// console.log(m);
// console.log(m[3]);
// console.log(m.length);
// console.log("==========");
// for(i=0; i<m.length; i++){
//    console.log(m[i]);
// }

function f1(){
   document.write("<p>Hello I am A function</p>");
}

f1();
f1();

function f2(name, color="black"){
   document.write("<p style='color:"+color+"'>Hello "+name+"</p>");
}

f2("Beso", "red");
f2("Keti");

function f3(){
  return 45;
}

document.write(f3()+87);

function f4(n1, n2, n3){
   s = n1+n2;
   return s*n3;
   d = n2*n3;
   return d+n1;
 }

document.write("<br>");
document.write(f4(3, 4, 5));

function lab8_1(text){
   document.write("<p class='text1'>"+text+"</p>");
}

lab8_1("JavaScript");


