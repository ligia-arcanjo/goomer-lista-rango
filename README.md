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

O projeto se trata de uma API utilizando Node.js com Express, utilizando um banco de dados relacional MySQL.

### O que foi desenvolvido

O objetivo principal do projeto é desenvolver um aplicativo gerencia restaurantes de produtos por meio de uma API Node.js conectada a um banco de dados relacional. 

O primeiro passo foi a modelagem do banco de dados que possui cadastrados dados dos restaurantes, e também, seus produtos e promoções.

Após isso foi preparado o setup do projeto utilizando as tecnologias descritas na seção [Tecnologias utilizadas](#tecnologias-utilizadas). A arquitetura escolhida para o desenvolvimento da aplicação foi o modelo model-service-controller (MSC).

### Tecnologias utilizadas

- Node.js versão 16
- Express versão 4.17
- ESlint
- MySQL
- mysql2
- dotenv

### Banco de dados

O banco de dados relacional utilizado neste projeto foi o MySQL.

O cadastro de restaurantes possui:
  - Foto do restaurante;
  - Nome do restaurante;
  - Endereço do restaurante;
  - Horários de funcionamento do restaurante.

O cadastro de produtos possui:
  - Foto do produto;
  - Nome do produto;
  - Preço do produto;
  - Categoria do produto;
  - Produtos em promoção (descrição da promoção do produto; dias da semana e o horário em que o produto deve está em promoção)

Foram criadas tabelas (conforme diagrama entidade-relacionamento abaixo) para simular as bases de dados de restaurantes e produtos gerenciados pela API construída.

<center><img src="goomer-diagram.png"></center>

Para utilizar o banco de dados criado e utilizar a API, importe localmente o conteúdo do arquivo `goomer.sql`, que está na raiz do projeto.
O banco foi populado com algumas informações para que o comportamento da API possa ser testado.

### Arquitetura MSC

A aplicação foi desenvolvida no modelo de arquitetura model-service-controller (MSC).

Foi escolhida uma arquitetura em camadas, pois pensando em manutenção e escabilidade, é necessário que o código siga algum tipo de organização que seja de simples de modificação ou adição de novas funcionalidades, onde cada uma das camadas possui uma responsabilidade única e bem definida.

  - **Model:** Essa camada tem como responsabilidade acomodar o código que irá acessar os dados arazenados. Assim as outras camadas não necessitam saber de qual banco de dados estão sendo acessados;

  - **Service:** Essa camada tem como responsabilidade validar as regras de negócio da aplicação;

  - **Controller:** Essa camada tem como responsabilidade validar o que foi recebido do cliente, ou seja, lidar com os JSON do corpo da requisição HTTP, parâmetros de requisição, entre outros.

### Documentação

Foi criada um documentação para utilização da API, pode ser encontrada no arquivo API-Doc.md neste repositório.

[Link da documentação](https://github.com/ligia-arcanjo/goomer-lista-rango/blob/main/API-Doc.md)

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
