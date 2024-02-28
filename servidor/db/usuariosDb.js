import { usuariosColecao } from './dbConnect.js';

function cadastrarUsuario({ nome, senha }) {
  return usuariosColecao.insertOne({ nome, senha });
}

function encontrarUsuario(nome) {
  const usuario = usuariosColecao.findOne({
    nome
  });

  return usuario;
}

export {cadastrarUsuario, encontrarUsuario};