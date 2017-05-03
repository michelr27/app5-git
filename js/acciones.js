// JavaScript Document

$(document).ready(function(e){
    document.addEventListener ("deviceready",function(){
		
		$('#beep').tap(function(){
			navigator.notificacion.beep(3);
		});//tap beep
		
			$('#vibrar').tap(function(){
			navigator.notificacion.vibrate(1000);
		});//tap vibrar
		
	},false);//deviceready
});//ready
		
		
		
		
