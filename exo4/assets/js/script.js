$(function(){
  $('label').css({
	'width':'150px',
	'display': 'inline-block'
  });
  const regexName = /^[a-zA-ZÀ-ÿ -]+$/;
  $('#generate').click(function(){
	let lastname = $('#lastname').val();
	let firstname = $('#firstname').val();
	let birthday = $('#birthday').val();
	let birthPlace = $('#birthPlace').val();
	let job = $('#job').val();
	let compagny = $('#compagny').val();
	if (regexName.test(lastname)&&regexName.test(firstname)&&regexName.test(birthPlace)&&regexName.test(job)&&regexName.test(compagny)){
    	alert(lastname + ' '+ firstname +', né(e) le ' + birthday +' à '+ birthPlace +', actuellement '+ job +' à '+ compagny);
	} else{
  	alert('Veuillez remplir les champs correctement');
	}
  });
});
