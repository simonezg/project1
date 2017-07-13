/*
Ce script se décomposera en trois parties :
1. Les différents éléments de votre page doivent etre chargés en Ajax

Ces éléments sont présent dans le dossier html

2. Il faudra ensuite gérer le formulaire de login qui doit etre envoyé en ajax
au fichier php/connexion. Il vous faudra déterminer en fonctio de la réponse 
ajax si le formulaire est valide ou pas et afficher dans la popin aside un 
message adapté. Les popins doivent pouvoir etre refermées de façon à laisser 
l'utilisateur corriger sa saisie

3. Le formulaire d'inscription doit subir un première validation coté client :

 - Aucun champs ne doit etre vide et la checkbox doit etre cochée. Sinon,
 une bordure rouge doit apparaitre sur les inputs
 - Si aucun champs n'est vide. Un délai artificiel doit etre mis en place à l'issue
 duquel la popin doit afficher un message ressemblant à "Votre inscription a bien été 
 prise en compte"
*/

$(function(){
    /*$.get("html/header.html section", function(data){
        $("header").replaceWith($(data).find("section"));
    });*/
    $('header').load('html/header.html section, aside', function(){
        $('aside a').click(function(){
            $('aside').fadeOut();
        });
        manageLogin();
    });
    $('article:nth-of-type(1)').load('html/map.html h1, img');
    $('article:nth-of-type(2)').load('html/signin.html h2, form', function() {
        manageLogin()
        /* var $inputs = $('main input');

        for (var i=0; i<$inputs.length; i++){
            $($inputs[i]).focusout(function(){
                if ($(this).val() === ""){
                    $(this).addClass("error");
                }
            });
        }

        $('main form').submit(function(event){
            event.preventDefault();
            var $inputs = $('main input');

            for (var i=0; i<$inputs.length; i++){
                if ($inputs.eq(i).val() === ""){
                    $inputs.eq(i).addClass("error");
                }     
            }

            var $selects = $('main select');

            for (var i=0; i<$selects.length; i++){
                if (!$selects.eq(i).is(':selected')){
                    $selects.eq(i).addClass("error");
                }
            }

            var $fieldsets = $('fieldset');

            for (var i=0; i<$fieldsets.length; i++){
                if (!$fieldsets.eq(i).is(':checked')){
                    $fieldsets.eq(i).addClass("error").css('color','red');
                }
            }

            var errorLen = $('.error').length;
            if(errorLen > 0) {
                alert('erreurs !!!');
            } else {
                alert('bienvenue !');
            }
        }); */
    });
    $('footer').load('html/footer.html ul, p');
});

function manageRegister(){
    $('main form').submit(function(e){
        e.preventDefault();
        $('error').removeClass('error');

        var $inputs = $(this).find('input[type="text"], input[type="password"]');
        $inputs.each(function(){
            if($(this).val() === ""){
                $(this).addClass('error');
            }        
        });

        var $selects = $(this).find('select');
        $selects.each(function(){
            if($(this).val() === "0"){
                $(this).addClass('error');                
            }
        });

        var $radios = $(this).find('input[name="genderSignin"]:checked');
        if($radios.length === 0){
            $(this).find('label').addClass('error');
        }           

        if ($(this).find([name='contactSignin']).val() !== $(this).find([name='contactSigninConfirm']).val()){
            $(this).find(name='contactSigninConfirm').addClass('error');
        }
        if($(this).find('.error') === '0'){
            $('aside p').text('Vous êtes désormais inscrit');
            $('aside').fadeIn();
        }
    });
}
function manageLogin() {
    $('header form').submit(function(e){
        e.preventDefault();
        // var login = $('input[name="userName"]').val();
        // var password = $('input[name="userPass"]').val();
        var dataForm = $(this).serialize();

        $.post('php/connexion.php', dataForm,  { userName: login, userPass: password }, function(data){
            console.log(data);
            // si l'utilisateur est connecté, on s'attend à recevoir un string qui correspond au bolléen true ('1' ici)
            if(data === '1'){
                $('aside p').text('Vous êtes connecté');
            } else{
                $('aside p').text("Vous n'êtes pas connecté");                
            }
            $('aside').fadeIn();
        });
    });
}