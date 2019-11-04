$(function(){
  //alignement des zones de saisie
  $('label').css({
    'width':'220px',
    'display': 'inline-block'
  });
  //déclaration des variables
  var monNom = $('#lastname').val();
  var monPrenom = $('#firstname').val();
  var dateNais = $('#birthDate').val();
  var lieuNais = $('#birthPlace').val();
  var metier = $('#job').val();
  var societe = $('#conpagny').val();
  //debut de la fonction de présentation
$('#generate').click(function(){
  alert(monNom);
alert('\"'+monNom+' '+monPrenom+', né(e) le '+dateNais+' à '+lieuNais+', actuellement '+metier+' à '+societe);
});
});
