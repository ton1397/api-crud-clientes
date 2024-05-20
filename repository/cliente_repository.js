const client = require('../database/conexao')

async function cliente_repository(id) {
    let conn = await client.getConnection();
    const query = `
        SELECT
            codigo,
            nome,
            cep,
            endereco,
            cidade,
            arquivo 
        FROM 
            clientes
        WHERE
            codigo = ?
    `
    const [rows] = await client.query(query, [id]);
    conn.release();
    return rows;
};

module.exports = cliente_repository;
