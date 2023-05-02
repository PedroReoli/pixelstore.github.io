const form = document.querySelector('#reset-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const usuario = document.querySelector('input[name="user"]').value;
  const novaSenha = document.querySelector('input[name="nova_senha"]').value;

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const usuarioEncontrado = usuarios.find(function(u) {
    return u.email === usuario;
  });

  if (usuarioEncontrado) {
    console.log('Dados do usuário:');
    console.log('Email:', usuarioEncontrado.email);
    console.log('Senha:', usuarioEncontrado.senha);
    console.log('Nova senha:', novaSenha);
  } else {
    console.log('Usuário não encontrado.');
  }
});
