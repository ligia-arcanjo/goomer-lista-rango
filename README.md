# Goomer Lista Rango

## Sumário

- [Goomer Lista Rango](#goomer-lista-rango)
  - [Sumário](#sumário)
  - [Sobre este projeto](#sobre-este-projeto)
    - [O que foi desenvolvido](#o-que-foi-desenvolvido)
    - [Tecnologias utilizadas](#tecnologias-utilizadas)
    - [Banco de dados](#banco-de-dados)
  - [Execução da aplicação](#execução-da-aplicação)
    - [Pré-requisitos](#pré-requisitos)
    - [Variáveis de ambiente](#variáveis-de-ambiente)
    - [Instalação das dependências e execução](#instalação-das-dependências-e-execução)
  - [Testes](#testes)
    - [Execução dos testes](#execução-dos-testes)
    - [Cobertura de testes](#cobertura-de-testes)
  - [Autoria](#autoria)

## Sobre este projeto

O projeto se trata de uma API utilizando Node.js com Express, utilizando um banco de dados relacional.

### O que foi desenvolvido


### Tecnologias utilizadas

- Node.js versão 16
- Express versão 4.17
- ESlint
- MySQL
- mysql2
- dotenv

### Banco de dados

O banco de dados relacional utilizado neste projeto foi o MySQL. Foram criadas tabelas (conforme diagrama entidade-relacionamento abaixo) para simular as bases de dados de restaurantes e produtos gerenciados pela API construída.

<img src="goomer-diagram.png">

## Execução da aplicação

### Pré-requisitos

Node.js versão 16

### Variáveis de ambiente

Para realizar a conexão com o banco de dados, na raiz do projeto renomeie o arquivo `.env.example` para `.env` com as variáveis de ambiente. Por exemplo, caso o seu usuário SQL seja `usuario` e a senha `1234` seu arquivo ficará desta forma:

```
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=usuario
MYSQL_PASSWORD=1234
MYSQL_DATABASE=Goomer
API_PORT=3001
```

- A variável `API_PORT` do arquivo `.env` deve ser utilizada para a conexão com o servidor;
- A variável `MYSQL_PORT` deve ser utilizada para conexão com o banco de dados.

### Instalação das dependências e execução

- Para rodar a aplicação localmente, faça o clone do repositório e entre na pasta:

    ```
    git clone git@github.com:ligia-arcanjo/goomer-lista-rango.git
    cd goomer-lista-rango
    ```

- Instale as dependências com o comando:

    ```
    npm install
    ```

- Inicie o servidor:

    ```
    npm run dev
    ```

## Testes

### Execução dos testes

Para executar os testes, rode o comando:


    npm test
   

### Cobertura de testes

Para verificar a cobertura de testes unitários presentes na aplicação rode o comando:

   

## Autoria

Ligia Arcanjo Gonçalves

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ligiaarcanjo/)
