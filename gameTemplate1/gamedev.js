
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
         $("#Ending").hide();
          $("#goback").hide();
    $("#startpage").show();


  $("#startbutton").click(function(){
   $("#start").show();
      $("#startpage").hide();
                $("#goback").show();
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
     $("#clue4").show();
});

$("#clue4back").click(function(){
   $("#leftwall").show();
     $("#clue4").hide();
});




$("#rightright").click(function(){
   $("#rightwallright").show();
   $("#rightwall").hide();
});

$("#rightrightzoom").click(function(){
   $("#clue3").show();
   $("#rightwallright").hide();
});

$("#clue3back").click(function(){
   $("#rightwallright").show();
     $("#clue3").hide();
});


$("#rightrightleft").click(function(){
   $("#rightwallright").hide();
   $("#rightwall").show();
});


$("#rightleft").click(function(){
   $("#rightwallleft").show();
   $("#rightwall").hide();
});

$("#rightleftzoom").click(function(){
   $("#clue2").show();
   $("#rightwallleft").hide();
});

$("#clue2back").click(function(){
   $("#rightwallleft").show();
     $("#clue2").hide();
});

$("#rightleftright").click(function(){
   $("#rightwallleft").hide();
   $("#rightwall").show();
});



$("#rightback").click(function(){
   $("#start").show();
   $("#rightwall").hide();
});





$("#forwardleft").click(function(){
   $("#forwardmiddle").hide();
   $("#forwardwallleft").show();
});

$("#forwardleftright").click(function(){
   $("#forwardmiddle").show();
   $("#forwardwallleft").hide();
});


$("#forwardright").click(function(){
   $("#forwardwallright").show();
   $("#forwardwall").hide();
});

$("#forwardrightleft").click(function(){
   $("#forwardwallright").hide();
   $("#forwardwall").show();
});



$("#forwardback").click(function(){
   $("#start").show();
   $("#forwardwall").hide();
});

$("#forwardzoommiddle").click(function(){
   $("#forwardwall").hide();
    $("#Ending").show();
});


$("#endrestart").click(function(){
   $("#Ending").hide();
    $("#start").show();
});



});//close everything
