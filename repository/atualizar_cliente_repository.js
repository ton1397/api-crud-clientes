const client = require('../database/conexao')

async function atualizar_cliente_repository({ nome, cep, endereco, cidade, url, id }) {
    try {
        let conn = await client.getConnection();                    
        const query = `
            UPDATE 
                clientes 
            SET 
                nome = ?,
                cep = ?,
                endereco = ?,
                cidade = ?,
                arquivo = ? 
            WHERE 
                codigo = ?`;
        const [rows] = await client.execute(
            query,
            [nome, cep, endereco, cidade, url, id]
        );
        conn.release();    
        return rows.affectedRows;
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        throw error;
    }

};

module.exports = atualizar_cliente_repository;
