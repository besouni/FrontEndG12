m1 = [3, 4, 5, 9]
console.log(m1)



m3 = []

for(i=0; i<10; i++){
   m4 = [];
   for(j=0; j<10; j++){
      m4[j] = Math.random();
   }
   m3[i] = m4;
}

console.log(m3);

console.log(m2)


m2 = [
   [3, 4, 5, 6, 9, 9],
   [4, 5, 6, 6],
   [4, 5, 5],
   [4, 5, 6, 6, 9],
]
tb = "<table border=1>";
for(i=0; i<m2.length; i++){
   tb += "<tr>";
      for(j=0; j<m2[i].length; j++){
         tb += "<td>";
         tb += m2[i][j];
         tb += "</td>";
      }  
   tb += "</tr>";
}
tb += "</table>";

document.write(tb);