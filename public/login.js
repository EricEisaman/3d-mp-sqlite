$('.error-page').hide(0);

// $('.login-button , .no-access').click(function(){
//   $('.login').slideUp(500);
//   $('.error-page').slideDown(1000);
// });

$('.try-again').click(function(){
  $('.error-page').hide(0);
  $('.login').slideDown(1000);
});

$('#game-name').html(window.config.login.gameName);
if(window.config.login.backgroundColor != "")$('.login-form').css('background',window.config.login.backgroundColor);
$('.login').show();

$('.login-button').click((e)=>{
  e.preventDefault();
  if($('#un').val()=="" || $('#pw').val()=="")return;
  window.socket.login({
    name:$('#un').val(),
    pw:$('#pw').val()
  });
  $('.login').slideUp(500);
  $('#un').val('');
  $('#pw').val('');
});

window.login.fail = msg=>{
  $('.error-page').slideDown(1000);
}