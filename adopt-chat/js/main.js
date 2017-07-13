$('form').submit(function(event){
	event.preventDefault(); //j'annule l'action par défaut de l'événement correspondant à la validation du formulaire
	
	/*var $inputs = $('select, textarea'); //je récupère l'ensemble de mes inputs au sein d'une collection d'inputs ($inputs)
	for (var i = 0; i < $inputs.length; i++){
		var $currentInput = $($inputs[i]);
		var valInput = $currentInput.val();
		if (valInput === ""){
			$currentInput.css('border-color','red');
			$('<p class=".error-msg">Ce champs est obligatoire</p>').insertAfter($currentInput);
		} else {
			$currentInput.css('border-color','green');
		}
	}*/

	if ($('select').val() === "" || $('textarea').val().length < 15) {
		
		if($('select').val() === ""){
			$('select').css('border','1px solid red');
		} 
		if ($('textarea')) {
			$('textarea').css('border-color','red');
		}
	}

	if($('.error-msg').length === 0){
		$('form').fadeOut('slow');
	}
}