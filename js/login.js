$('#form_cadastro').submit((event) => {
  event.preventDefault();

  $('#form_cadastro').fadeOut();
  $('#cadastro_ok').hide();
  $('#cadastro_erro').hide();

  const usuario = {
    nome: $('#cadastro_nome').val(),
    email: $('#cadastro_email').val(),
    senha: $('#cadastro_senha').val(),
  };

  $.ajax({
    url: 'https://francilio-frontend-api.firebaseio.com/usuarios.json',
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(usuario),
    success: (resposta) => {
      $('#cadastro_ok').fadeIn();
      $('#form_cadastro')[0].reset();
    },
    error: (resposta) => {
      $('#form_cadastro').fadeIn();
      $('#cadastro_erro').fadeIn();
    }
  });
});

$('#novo_cadastro').click(() => {
  $('#cadastro_ok').fadeOut();
  $('#form_cadastro').fadeIn();
});
