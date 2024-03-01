// Recebemos o nome do documento por parâmetro e, com o método filter, filtramos as conexões por aquelas que possuem a propriedade nomeDocumento igual ao nome passado por parâmetro. 
// Em seguida, com o método map, reescrevemos o array filtrado para um array apenas com os nomes dos usuários. 
// Por fim, retornamos o resultado de todas essas operações, concluindo a responsabilidade da função.

const conexoesDocumentos = [];

function encontrarConexao(nomeDocumento, nomeUsuario) {
  return conexoesDocumentos.find((conexao) => {
    return (
      conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario
    );
  });
}

function adicionarConexao(conexao) {
  conexoesDocumentos.push(conexao);
}

function obterUsuariosDocumento(nomeDocumento) {
  return conexoesDocumentos
    .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
    .map((conexao) => conexao.nomeUsuario);
}

function removerConexao(nomeDocumento, nomeUsuario) {
  const indice = conexoesDocumentos.findIndex((conexao) => {
    return (
      conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario
    );
  });

  if (indice !== -1) {
    conexoesDocumentos.splice(indice, 1);
  }

  console.log(conexoesDocumentos);
}

export {
  encontrarConexao,
  adicionarConexao,
  obterUsuariosDocumento,
  removerConexao,
};