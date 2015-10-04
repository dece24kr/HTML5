jQuery(function($){
	$(document).on("mouseover focus", ".gnb>ul>li>a", function(){
		$(this).parent("li").addClass("active").siblings("li").removeClass("active");
	});
});