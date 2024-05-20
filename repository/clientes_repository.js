const client = require('../database/conexao')

async function clientes_repository() {
    let conn = await client.getConnection();
    const [rows] = await conn.query('SELECT codigo, nome, cep, endereco, cidade, arquivo FROM clientes');
    conn.release();
    return rows;
};

module.exports = clientes_repository;
