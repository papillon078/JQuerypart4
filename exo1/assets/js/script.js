$(function(){
  let randomNber = Math.trunc(Math.random()*10);
  let CPUChoice = '';
  if (randomNber <4){
    CPUChoice = 'Pierre';
  }
  else if (randomNber >3 && randomNber <6){
    CPUChoice = 'Feuille';
  }
  else { CPUChoice = 'Ciseaux'; }
  //debut du jeu
  $('#playerTry').click(function(){
    //recupération de la proposition du joueur
    let playerChoice = $('.liste').val();
    if (playerChoice == CPUChoice){
      alert('égalité');
    }
    else if (playerChoice == 'Ciseaux' && CPUChoice == 'Pierre'){
      alert('perdu');
    }
    else if (playerChoice == 'Ciseaux' && CPUChoice == 'Feuille'){
      alert('gagné !');
    }
    else if (playerChoice == 'Pierre' && CPUChoice == 'Feuille'){
      alert('perdu');
    }
    else if (playerChoice == 'Pierre' && CPUChoice == 'Ciseaux'){
      alert('gagné !');
    }
    else if (playerChoice == 'Feuille' && CPUChoice == 'Pierre'){
      alert('gagné !');
    }
    else if (playerChoice == 'Feuille' && CPUChoice == 'Ciseaux'){
      alert('perdu');
    }
    else{}
  });
});
