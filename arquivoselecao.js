$(function(){

	$('.desktop a').hover(function(){
		$('.desktop li').removeClass('selecionado');
		$(this).parent().addClass('selecionado');
		$('.selecionado>span').css('width','100%');
		});
	$('.icones01 h2 b').css('color','#509d87');
	$('.propaganda01 h2 b').css('color','#509d87');

	$('.mobile ul').fadeOut();
	$('.mobile').click(function(){
		$('.mobile ul').slideToggle('click');
	});

	$('.desktop a').mouseout(function(){
		$('.selecionado>span').css('width','22px');
	});
		
})
