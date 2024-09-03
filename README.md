<html lang="pt-br">
<body>
    <div class="container">
        <h1>API Rest de Livraria</h1>
        <p>Este projeto é uma API RESTful para gerenciamento de uma livraria. A API permite realizar operações de CRUD (Criar, Ler, Atualizar e Deletar) em livros e autores.</p>
        <h2>Ferramentas e Tecnologias Utilizadas</h2>
        <ul>
            <li><strong>JavaScript</strong> - Linguagem de programação utilizada no desenvolvimento.</li>
            <li><strong>Express.js</strong> - Framework Node.js utilizado para a criação das rotas e manipulação das requisições HTTP.</li>
            <li><strong>MongoDB</strong> - Banco de dados NoSQL utilizado para armazenar as informações.</li>
            <li><strong>MongoDB Atlas</strong> - Serviço de banco de dados na nuvem utilizado para hospedar o MongoDB.</li>
        </ul>
        <h2>Instalação</h2>
        <p>Para rodar este projeto localmente, siga os passos abaixo:</p>
        <ol>
            <li>Clone este repositório: <code>git clone https://github.com/BarretoJv22/LivrariaAPI.git</code></li>
            <li>Entre na pasta do projeto: <code>cd LivrariaAPI</code></li>
            <li>Instale as dependências: <code>npm install</code></li>
            <li>Configure as variáveis de ambiente no arquivo <code>.env</code>, incluindo a URL de conexão com o MongoDB Atlas. Por exemplo: <code>MONGODB_URI=sua-chave-de-conexao</code>.</li>
            <li>Inicie o servidor: <code>npm run dev</code></li>
        </ol>
        <h2>Endpoints</h2>
        <p>A API possui os seguintes endpoints:</p>
        <ul>
            <li><code>GET /livros</code> - Retorna uma lista de todos os livros.</li>
            <li><code>GET /livros/:id</code> - Retorna os detalhes de um livro específico.</li>
            <li><code>POST /livros</code> - Adiciona um novo livro.</li>
            <li><code>PUT /livros/:id</code> - Atualiza as informações de um livro existente.</li>
            <li><code>DELETE /livros/:id</code> - Remove um livro.</li>
            <li><code>GET /livros/busca?editora=nomeDaEditora</code> - Busca livros por editora.</li>
            <li><code>GET /autores</code> - Retorna uma lista de todos os autores.</li>
            <li><code>GET /autores/:id</code> - Retorna os detalhes de um autor específico.</li>
            <li><code>POST /autores</code> - Adiciona um novo autor.</li>
            <li><code>PUT /autores/:id</code> - Atualiza as informações de um autor existente.</li>
            <li><code>DELETE /autores/:id</code> - Remove um autor.</li>
        </ul>
        <h2>Estrutura de Diretórios</h2>
        <pre>
        ├── src
        │   ├── controllers
        │   ├── models
        │   ├── routes
        ├── .env
        ├── package.json
        ├── package-lock.json
        └── server.js
        </pre>
    </div>
</body>
</html>
