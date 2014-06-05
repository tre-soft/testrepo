jQuery(document).ready(function(){
	$("#hidePanel").click(function(){
		$("#panel").animate({marginLeft:"-175px"}, 500 );
		$("#leftPanel").animate({width:"0px", opacity:0}, 400 );
		$("#showPanel").show("normal").animate({width:"28px", opacity:1}, 200);
		$("#mainPanel").animate({marginLeft:"30px"}, 500);
	});
	$("#showPanel").click(function(){
		$("#mainPanel").animate({marginLeft:"260px"}, 200);
		$("#panel").animate({marginLeft:"0px"}, 400 );
		$("#leftPanel").animate({width:"260px", opacity:1}, 400 );
		$("#showPanel").animate({width:"0px", opacity:0}, 600).hide("slow");
	});
});

/*jQuery(document).ready(function(){
	$("#hidePanel").click(function(){
		$("#panel").animate({marginLeft:"-175px"}, 500 );
		$("#colleft").animate({width:"0px", opacity:0}, 400 );
		$("#showPanel").show("normal").animate({width:"28px", opacity:1}, 200);
		$("#colright").animate({marginLeft:"50px"}, 500);
	});
	$("#showPanel").click(function(){
		$("#colright").animate({marginLeft:"200px"}, 200);
		$("#panel").animate({marginLeft:"0px"}, 400 );
		$("#colleft").animate({width:"175px", opacity:1}, 400 );
		$("#showPanel").animate({width:"0px", opacity:0}, 600).hide("slow");
	});
});*/