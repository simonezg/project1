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
    $('header').load('html/header.html section, aside');
    $('article:first').load('html/map.html h1, img');
    $('article:last').load('html/signin.html h2, form');
    $('footer').load('html/footer.html ul, p');
});