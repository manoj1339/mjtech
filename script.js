/* Javascript File */

$(document).ready(function(){
	$("h2").click(function(event){
		var el = event.target.id;
		
		if(el == "code1")
		{
			$("#block1").slideToggle(300);
			$("#"+el+" i").eq(1).toggleClass("fa-minus-circle");
		}
		
		if(el == "code2")
		{
			$("#block2").slideToggle(300);
			$("#"+el+" i").eq(1).toggleClass("fa-minus-circle");
		}
		
		if(el == "code3")
		{
			$("#block3").slideToggle(300);
			$("#"+el+" i").eq(1).toggleClass("fa-minus-circle");
		}
		
		if(el == "code4")
		{
			$("#block4").slideToggle(300);
			$("#"+el+" i").eq(1).toggleClass("fa-minus-circle");
		}
		
		if(el == "code5")
		{
			$("#block5").slideToggle(300);
			$("#"+el+" i").eq(1).toggleClass("fa-minus-circle");
		}
	});
	
	$("#c1").click(function(){
		$("#java1").removeClass("focus");
		$(this).toggleClass("focus");
		$("#code-c-1").show();
		$("#code-java-1").hide();
	})
	
	$("#java1").click(function(){
		$("#c1").removeClass("focus");
		$(this).toggleClass("focus");
		$("#code-java-1").show();
		$("#code-c-1").hide();
	})
	
	
	$("#c2").click(function(){
		$("#java2").removeClass("focus");
		$(this).toggleClass("focus");
		$("#code-c-2").show();
		$("#code-java-2").hide();
	})
	
	$("#java2").click(function(){
		$("#c2").removeClass("focus");
		$(this).toggleClass("focus");
		$("#code-java-2").show();
		$("#code-c-2").hide();
	})
	
	$("#c3").click(function(){
		$("#java3").removeClass("focus");
		$(this).toggleClass("focus");
		$("#code-c-3").show();
		$("#code-java-3").hide();
	})
	
	$("#java3").click(function(){
		$("#c3").removeClass("focus");
		$(this).toggleClass("focus");
		$("#code-java-3").show();
		$("#code-c-3").hide();
	})
	
	
	$("#c4").click(function(){
		$("#java4").removeClass("focus");
		$(this).toggleClass("focus");
		$("#code-c-4").show();
		$("#code-java-4").hide();
	})
	
	$("#java4").click(function(){
		$("#c4").removeClass("focus");
		$(this).toggleClass("focus");
		$("#code-java-4").show();
		$("#code-c-4").hide();
	})
	
	$("#c5").click(function(){
		$("#java5").removeClass("focus");
		$(this).toggleClass("focus");
		$("#code-c-5").show();
		$("#code-java-5").hide();
	})
	
	$("#java5").click(function(){
		$("#c5").removeClass("focus");
		$(this).toggleClass("focus");
		$("#code-java-5").show();
		$("#code-c-5").hide();
	})
});