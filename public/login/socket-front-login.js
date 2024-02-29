// eslint-disable-next-line no-undef
const socket = io('http://localhost:3000/');

function emitirAutenticarUsuario(dados){
  socket.emit('autenticar_usuario', dados);
}

export { emitirAutenticarUsuario };