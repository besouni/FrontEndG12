function send(){
   var user = $("#user").val();
   var pass = $("#pass").val();
   var courses = ["Front-end", "algoritms", "Bakch-end"];
   // console.log(user + " "+pass);
   $.ajax({
      type:"post",
      url:"http://intercom.ge/btu.php",
      data:{
         user1: "beklsdjovsn",
         user2: user,
         pass: pass,
         uni: "BTU",
         courses: courses
      },
      success:function(data){
         var data = JSON.parse(data);
         console.log(data);
         console.log(data[3][1]);
      }
   });
}