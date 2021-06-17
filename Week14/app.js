function f1(){
   var p2 = $("#p2");
   console.log(p2);
   p2.text("Hello jquery");
   console.log($("p"));
   var p =  $("p");
   console.log(p[1]);
   p[2].innerText = "Hello P";
}

$("#but").click(function(){
      $(this).css("background-color", "yellow");
})

$("#p3").on({ 
   click: function(){
      $(this).css("background-color", "yellow");
   },
   mouseleave: function(){
      $(this).css("background-color", "green");
   }
});

$("#jqEffect").click(function(){
   $("#div1").hide(3000);
})

$("#jqEffect1").click(function(){
   $("#div1").show(3000);
})

$("#jqEffect2").click(function(){
   $("#div1").toggle(3000);
})

$("#jqEffect3").click(function(){
   $("#div1").fadeOut(3000, function(){
      $("#div1").fadeIn(3000);
   });
})



$(document).ready(function () {
   $("#jqEffect4").click(function(){
      $("#div1").slideUp(3000);
   })
});


$("#userClick").click(function(){
   var user = $("#user").val();
   $("#userInfo").html("<b>"+user+"</b>");
})


$("#b1").click(function(){
   $("#p2").append("<b> appaend </b>").prepend(" Prepend ").before("BEFORE").after("AFTER");
   console.log($(this).next());
   el = $(this).next();
   el.css("background-color", "yellow")
   console.log(el);
})

$("#b2").click(function(){
   $("#div1").remove();
})


$("p").each(function(){
   $(this).css("font-size", "2em");
})


