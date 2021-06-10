jQuery(document).ready(function($){

	$('.panel').hide()
	var sub=$('.long-code-sub');
		btn153=sub.find('.btn153');
		
		btn153.each(function(){
		tg=$(this);
		tg.click(function(){
		$('.panel').toggle();
		})
	})
	
	
	
	
	
});
