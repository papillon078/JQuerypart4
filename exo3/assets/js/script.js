$(function(){
  //alignement des zones de saisie
  $('label').css({
    'width':'220px',
    'display': 'inline-block'
  });
  //declaration des regex
  const regexName = /^[a-zA-ZÀ-ÿ-]+$/;
  const regexMail = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
  const regexPhone = /^(\d\d){5}$/;
  //envoi du formulaire
  $('#verify').click(function(){
    //récupération des champs de saisie
    let lastname = $('#lastname').val();
    let firstname = $('#firstname').val();
    let email = $('#email').val();
    let phoneNumber = $('#phoneNumber').val();
    //création des variables de validation
    let lastnameCheck = '';
    let firstnameCheck = '';
    let emailCheck = '';
    let phoneNumberCheck = '';
    //vérification de chaque champ avec la regex associée
    if (regexName.test(lastname)){
      lastnameCheck ='correct';
    } else{
      lastnameCheck = 'format incorrect';
    }
    if (regexName.test(firstname)){
      firstnameCheck ='correct';
    } else{
      firstnameCheck = 'format incorrect';
    }
    if (regexMail.test(email)){
      emailCheck ='correct';
    } else{
      emailCheck = 'format incorrect';
    }
    if (regexPhone.test(phoneNumber)){
      phoneNumberCheck ='correct';
    } else{
      phoneNumberCheck ='format incorrect';
    }
    //affichage des résultats
    alert('Champ Nom : '+ lastnameCheck +
    '\nChamp Prénom : '+ firstnameCheck +
    '\nChamp Email : '+ emailCheck +
    '\nChamp Numéro de téléphone : '+ phoneNumberCheck);
  });
});
