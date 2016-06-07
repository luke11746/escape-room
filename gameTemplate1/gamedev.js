
$(document).ready(function(){

  $("#leftwall").hide();
  $("#leftwallleft").hide();
$("#leftwallright").hide();
$("#leftwallmiddle").hide();

  $("#rightwall").hide();
  $("#rightwallleft").hide();
 $("#rightwallright").hide();
  $("#rightwallmiddle").hide();

 $("#forwardwall").hide;
 $("#forwardwallleft").hide();
  $("#forwardwallright").hide();
 $("#forwardwallmiddle").hide();

  $("#endpage").hide();
   $("#start").hide();
    $("#clue1").hide();
     $("#clue2").hide();
      $("#clue3").hide();
       $("#clue4").hide();
    $("#startpage").show();


  $("#startbutton").click(function(){
   $("#start").show();
      $("#startpage").hide();
});

   $("#restart").click(function(){


 $("#leftwall").hide();
  $("#leftwallleft").hide();
$("#leftwallright").hide();
$("#leftwallmiddle").hide();

  $("#rightwall").hide();
  $("#rightwallleft").hide();
 $("#rightwallright").hide();
  $("#rightwallmiddle").hide();

 $("#forwardwall").hide;
 $("#forwardwallleft").hide();
  $("#forwardwallright").hide();
 $("#forwardwallmiddle").hide();

  $("#endpage").hide();
   $("#start").hide();
    $("#clue1").hide();
     $("#clue2").hide();
      $("#clue3").hide();
       $("#clue4").hide();
    $("#start").show();
});




  $("#startzoom").click(function(){
   $("#clue1").show();
      $("#start").hide();
});

    $("#clue1back").click(function(){
   $("#start").show();
      $("#clue1").hide();
});

  $("#startleft").click(function(){
   $("#leftwall").show();
      $("#start").hide();
});

   
  $("#startright").click(function(){
   $("#rightwall").show();
   $("#start").hide();
});

$("#startforward").click(function(){
   $("#forwardwall").show();
   $("#start").hide();
});





$("#leftleft").click(function(){
   $("#leftwallleft").show();
   $("#leftwall").hide();
});


$("#leftleftright").click(function(){
   $("#leftwallleft").hide();
   $("#leftwall").show();
});


$("#leftright").click(function(){
   $("#leftwallright").show();
   $("#leftwall").hide();
});

$("#leftrightleft").click(function(){
   $("#leftwallright").hide();
   $("#leftwall").show();
});


$("#leftback").click(function(){
   $("#start").show();
   $("#leftwall").hide();
});

$("#leftzoommiddle").click(function(){
   $("#leftwall").hide();
     $("#clue4").hide();
});



$("#rightright").click(function(){
   $("#rightwallright").show();
   $("#rightwall").hide();
});


$("#rightleft").click(function(){
   $("#rightwallright").show();
   $("#rightwall").hide();
});


$("#rightback").click(function(){
   $("#start").show();
   $("#rightwall").hide();
});

$("#rightzoommiddle").click(function(){
   $("#rightwall").hide();
});




$("#forwardleft").click(function(){
   $("#forwardmiddle").show();
   $("#rightwall").hide();
});


$("#forwardright").click(function(){
   $("#forwardwallright").show();
   $("#forwardwall").hide();
});


$("#forwardback").click(function(){
   $("#start").show();
   $("#forwardwallrdwall").hide();
});

$("#forwardmiddlezoom").click(function(){
   $("#forwardwall").hide();
});



});//close everything
