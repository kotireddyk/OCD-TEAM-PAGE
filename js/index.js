$(document).ready(function(){
	$("#area").on("click", function(){
		$("#subbtn").show();
		$("#count").show();

	});
	var charact = 120;
   $( "#area" ).keypress(function() {
       
       charact--;
       var msg = charact + " Characters.";
       document.getElementById('count').innerHTML=msg;
       if(charact == 0)
       	alert("stop");
      
    });
	$("#subbtn").on("click", function(){
		$("#subbtn").hide();
		$("#count").hide();

    });

});