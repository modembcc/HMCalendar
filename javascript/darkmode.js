$(document).ready(function(){
	var nightmode = 0;
	if(nightmode){
		document.getElementById("cur_mode").src="pic/moon.png";
	}
	else{
		document.getElementById("cur_mode").src="pic/sun.png";
	}
	$('.slider').click(function(){
		var element = document.body;
		element.classList.toggle("dark-mode");
		nightmode = 1-nightmode;
		if(nightmode){
			document.getElementById("cur_mode").src="pic/moon.png";
		}
		else{
			document.getElementById("cur_mode").src="pic/sun.png";
		}
	});
});