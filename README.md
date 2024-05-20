Aqui está o arquivo `README.md` que orienta como configurar e rodar a API Express conforme o contexto fornecido:

```markdown
# Guia de Configuração e Execução da API Express

## Passos para Configuração

1. **Clone o Projeto**
   - Clone o repositório do projeto para sua máquina local:
     ```bash
     git clone https://github.com/ton1397/api-crud-clientes.git
     ```
   - Navegue até o diretório do projeto:
     ```bash
     cd seu-projeto
     ```

2. **Instale as Dependências**
   - Execute o comando abaixo para instalar todas as dependências necessárias:
     ```bash
     npm install
     ```

3. **Configure as Variáveis de Ambiente**
   - Crie um arquivo `.env` na raiz do projeto:
     ```bash
     touch .env
     ```
   - Adicione a configuração da porta. Se você quiser rodar a aplicação em uma porta específica, defina a variável `PORT` na primeira linha do arquivo `.env`. Caso contrário, a aplicação rodará na porta padrão `3000`:
     ```env
     PORT=SUA_PORTA
     ```
     Exemplo para rodar na porta `3000`:
     ```env
     PORT=3000
     ```

   - Configure o Firebase criando um app web no Firebase para obter o `firebaseConfig` e adicione a seguinte linha ao arquivo `.env`:
     ```env
     FIREBASE_CONFIG='{
       "apiKey": "seu_apiKey",
       "authDomain": "seu_authDomain",
       "projectId": "seu_projectId",
       "storageBucket": "seu_storageBucket",
       "messagingSenderId": "seu_messagingSenderId",
       "appId": "seu_appId"
     }'
     ```

   - Configure o ambiente de banco de dados MySQL e adicione a variável `DATABASE_URL` no arquivo `.env` com o seguinte formato:
     ```env
     DATABASE_URL=mysql://SEU_USUARIO:SUA_SENHA@SEU_HOST:SUA_PORTA/SEU_BANCO_DE_DADOS
     ```

     Exemplo:
     ```env
     DATABASE_URL=mysql://root:password@localhost:3306/meu_banco
     ```

## Executando a Aplicação

- Após configurar todas as variáveis de ambiente, seu ambiente local estará pronto para rodar a aplicação. Execute o comando abaixo para iniciar o servidor:
  ```bash
  npm run start
  ```

- Se tudo estiver configurado corretamente, a API estará rodando na porta especificada no arquivo `.env`. Caso a variável `PORT` não tenha sido definida, a aplicação usará a porta padrão `3000`.

## Notas Adicionais

- Certifique-se de que o MySQL está rodando e acessível com as credenciais fornecidas.
- Verifique se o Firebase está corretamente configurado e se as credenciais são válidas.
- Se você encontrar algum problema, verifique o arquivo `.env` para garantir que todas as variáveis estão corretamente configuradas.

Pronto! Agora você deve estar apto a rodar e desenvolver localmente com a sua API Express.
```

Este arquivo `README.md` fornece instruções claras sobre como configurar e rodar a aplicação Express localmente, incluindo a configuração do Firebase e do banco de dados MySQL.