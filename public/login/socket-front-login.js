// eslint-disable-next-line no-undef
const socket = io();

function emitirAutenticarUsuario(dados){
  socket.emit('autenticar_usuario', dados);
}

export { emitirAutenticarUsuario };