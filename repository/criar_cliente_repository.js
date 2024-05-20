const client = require('../database/conexao')

const criar_cliente_repository = async ({ nome, cep, url, endereco, cidade }) => {
    try {
        let conn = await client.getConnection();
        const [rows] = await client.execute(
            'INSERT INTO clientes (nome, cep, endereco, cidade, arquivo) VALUES (?, ?, ?, ?, ?)',
            [nome, cep, endereco, cidade, url]
        );
        conn.release();
        return rows.insertId;
    } catch (error) {
        console.error('Erro ao inserir usuário:', error);
        throw error;
    }
};

module.exports = criar_cliente_repository
