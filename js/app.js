$("#submitButton").click(function(e) {
	var itemDiv = $("ul").append("<li>").append("<div class='item'>").append(document.getElementById("textBox").value).append("<button class='delete'>x</button>");
		$("#textBox").val('');
		$(".delete").click(function(f){
		f.stopImmediatePropagation();
		$(this).remove();
		console.log("clicked!");
});
	e.preventDefault();
});	
$(document).ready(function() {
});