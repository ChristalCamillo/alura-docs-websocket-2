// Recebemos o nome do documento por parâmetro e, com o método filter, filtramos as conexões por aquelas que possuem a propriedade nomeDocumento igual ao nome passado por parâmetro. 
// Em seguida, com o método map, reescrevemos o array filtrado para um array apenas com os nomes dos usuários. 
// Por fim, retornamos o resultado de todas essas operações, concluindo a responsabilidade da função.

const conexoesDocumentos = [];

function adicionarConexao(conexao) {
  conexoesDocumentos.push(conexao);
  console.log(conexoesDocumentos);
}

function obterUsuariosDocumento(nomeDocumento) {
  return conexoesDocumentos
    .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
    .map((conexao) => conexao.nomeUsuario);
}

export { adicionarConexao, obterUsuariosDocumento };