$(function(){
  //création de la variable d'appreciation
  let appreciation = '';
  //création de la regex pour n'autoriser que les notes entre 0 et 20
  const regexNote = /^(1?\d|20)(\.\d)?$/;
  //fonction qui s'execute au clic sur le bouton
  $('#calculateAverage').click(function(){
    //recuperation des notes et conversion en nombres décimaux
    let firstNote = parseFloat($('#firstNote').val());
    let secondNote = parseFloat($('#secondNote').val());
    let thirdNote = parseFloat($('#thirdNote').val());
    let fourthNote = parseFloat($('#fourthNote').val());
    let fifthNote = parseFloat($('#fifthNote').val());
    //comparaison entre la saisie et la regex
    if (regexNote.test($('#firstNote').val()) && regexNote.test($('#secondNote').val()) && regexNote.test($('#thirdNote').val()) && regexNote.test($('#fourthNote').val()) && regexNote.test($('#fifthNote').val())){
      //calcul de la moyenne
      let average = (firstNote + secondNote + thirdNote + fourthNote + fifthNote)/5;
      //attribution de l'appréciation correspondant à la moyenne
      if (average<10){
        appreciation='En dessous de la moyenne';
      }
      else if (average>9 && average<13){
        appreciation = 'Moyen';
      }
      else if(average>12 && average<16){
        appreciation = 'Bien';
      }
      else if(average>15 && average<20){
        appreciation = 'Très bien';
      }
      else{appreciation = 'excellent';}
      //affichage des résultats
      alert('Vous avez obtenu une moyenne de : \n'+average+'\n'+appreciation);
      //message d'erreur si la saisie n'est pas conforme
    }else {alert('veuillez entrer vos notes entre 0 et 20 avec un point comme séparateur décimal');}
  });

});
