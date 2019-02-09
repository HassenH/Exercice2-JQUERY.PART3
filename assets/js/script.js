$(function(){
  var counter = 0;
  $('#plus').click(function(){
    counter++; // ajoute 1 au compteur
    $('#number').val(counter);
  });
  $('#minus').click(function(){
    counter--; // retire 1 au compteur
    $('#number').val(counter);
  });
});
