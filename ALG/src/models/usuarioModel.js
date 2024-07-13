const crypto = require('crypto');
var database = require("../database/config");

const chaveSecreta = 'chave-secreta-aqui';
// Para fazer a criptografia utilizei uma biblioteca chamada crypto - 04/07/2024
function criptografar(texto) {
   const cipher = crypto.createCipher('aes-256-cbc', chaveSecreta);
   let criptografado = cipher.update(texto, 'utf8', 'hex');
   criptografado += cipher.final('hex');
   return criptografado;
}

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);
    const senhaCriptografada = criptografar(senha);
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senhaCriptografada}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    const senhaCriptografada = criptografar(senha);
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senhaCriptografada}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function insert_banco(respCorreta, respErrada, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function insert_banco():", respCorreta, respErrada, idUsuario);
    
    var instrucaoSql = `
        INSERT INTO quiz (acertos, erros, fkUsuario) VALUES (${respCorreta}, ${respErrada}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function showQuiz(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function showQuiz():", idUsuario);
    
    var instrucaoSql = `
        SELECT acertos, erros FROM quiz WHERE idQuiz = (SELECT MAX(idQuiz) FROM quiz WHERE fkUsuario = ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function findQuiz(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function findQuiz():", idUsuario);
    
    var instrucaoSql = `
        SELECT acertos, erros FROM quiz WHERE idQuiz = (SELECT MAX(idQuiz) FROM quiz WHERE fkUsuario = ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function findLastQuiz(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function findLastQuiz():", idUsuario);
    
    var instrucaoSql = `
        SELECT acertos, erros FROM quiz WHERE idQuiz = (SELECT MAX(idQuiz) FROM quiz WHERE fkUsuario = ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function findLastQuiz(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function findLastQuiz():", idUsuario);
    
    var instrucaoSql = `
        SELECT acertos, erros FROM quiz WHERE idQuiz = (SELECT MAX(idQuiz) FROM quiz WHERE fkUsuario = ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Função para obter o ranking dos usuários -- 12/07/2024
function rank() {
    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function rank():");

    // fazendo o select para obter e exibir o ranking dos usuários -- 12/07/2024
    var instrucaoSql = `
       SELECT usuario.nome, MAX(quiz.acertos) AS acertos FROM usuario INNER JOIN quiz ON usuario.idUsuario = quiz.fkUsuario GROUP BY usuario.nome ORDER BY acertos ASC LIMIT 10;
    `;
    
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    
    
    return database.executar(instrucaoSql);
}


module.exports = {
    autenticar,
    cadastrar,
    insert_banco,
    showQuiz,
    findQuiz,
    findLastQuiz,
    rank
};