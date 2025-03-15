# Desafio Backend - Bossabox

Este repositório contém a solução para o desafio backend proposto pela Bossabox. O objetivo era desenvolver uma API para gerenciar ferramentas, permitindo operações como cadastro, listagem, filtragem por tags e exclusão de ferramentas. A aplicação foi desenvolvida utilizando Node.js, PostgreSQL e Docker.

## 📋 Descrição do Desafio

O desafio consistia em criar uma API RESTful para gerenciar uma lista de ferramentas, onde cada ferramenta possui um nome, link, descrição e tags. A API deveria permitir:

- Cadastrar uma nova ferramenta.
- Listar todas as ferramentas cadastradas.
- Filtrar ferramentas por tags.
- Excluir uma ferramenta específica.

## Bônus realizados

- Conteinerização da aplicação;
- Autenticação e autorização (**OAuth, JWT**);

## 🛠️ Ferramentas Utilizadas

- **Node.js**: Ambiente de execução JavaScript utilizado para desenvolver a API.
- **PostgreSQL**: Banco de dados relacional para armazenar as ferramentas.
- **Docker**: Para conteinerização da aplicação e do banco de dados, facilitando a execução em diferentes ambientes.
- **JWT (JSON Web Tokens)**: Para autenticação e proteção das rotas.

## 📸 Demonstração

Aqui estão algumas capturas de tela que demonstram o funcionamento da aplicação:

1. **Listando todas as ferramentas cadastradas:**
   ![Mostrando todas as ferramentas cadastradas no banco de dados](image.png)

2. **Criando uma nova ferramenta:**
   ![Criando uma ferramenta nova no banco de dados](image-1.png)

3. **Filtrando ferramentas por uma tag específica:**
   ![Resgatando uma ferramenta com uma tag especifica](image-2.png)

4. **Gerando um token de acesso:**
   ![Gerando um token de acesso](image-3.png)

5. **Tentativa de exclusão sem token (erro):**
   ![Mensagem de erro tentando deletar uma ferramenta sem o token](image-4.png)

6. **Exclusão de uma ferramenta com token válido:**
   ![Deletando uma ferramenta da base de dados passando um id especifico e com o token](image-5.png)

## 🚀 Como Executar a Aplicação

Para rodar a aplicação, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/Desafio-Backend.git
   cd Desafio-Backend

Certifique-se de ter o Docker e o Docker Compose instalados. Em seguida, execute o seguinte comando:

   ```bash
    docker-compose up
