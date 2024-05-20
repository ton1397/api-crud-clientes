const client = require('../database/conexao')

async function apagar_cliente_repository(id) {
    let conn = await client.getConnection();        
    const query = `
        DELETE 
            FROM
                clientes
        WHERE
            codigo = ?
    `
    const [rows] = await client.query(query, [id]);
    conn.release();    
    return rows.affectedRows;
};

module.exports = apagar_cliente_repository;
