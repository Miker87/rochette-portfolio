$(document).ready(function() {
	$("a#logo").click(function(e) {	
		$("div.activePortfolio").hide("slow");ive
		$(".activePortfolio").removeClass("activePortfolio");
		$("div.activeContent").hide("slow").removeClass("activeContent");
	});

	$("a#portfolio").click(function(e) {
		$("div.activePortfolio").hide("slow");
		$(".activePortfolio").removeClass("activePortfolio");
		$("div.activeContent").hide("slow").removeClass("activeContent");
		$("div#portfolioContent").show("slow").addClass("activeContent");
		return false;
	});
	$("a#resume").click(function(e) {
		$("div.activePortfolio").hide("slow");
		$(".activePortfolio").removeClass("activePortfolio");	
		$("div.activeContent").hide("slow").removeClass("activeContent");
		$("div#resumeContent").show("slow").addClass("activeContent");
		return false;
	});
	$("a#about").click(function(e) {
		$("div.activePortfolio").hide("slow");
		$(".activePortfolio").removeClass("activePortfolio");	
		$("div.activeContent").hide("slow").removeClass("activeContent");
		$("div#aboutContent").show("slow").addClass("activeContent");
		return false;
	});

/* PORTFOLIO */	
	
	$(".portfolioItem a").click(function(e)  {
		$("div.activePortfolio").hide("slow");
		$(".activePortfolio").removeClass("activePortfolio");
		$(this).addClass("activePortfolio");
		$(this).parent("").children("div").show("slow").addClass("activePortfolio");
		return false
	});
});
	