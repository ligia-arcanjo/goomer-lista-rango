# Gommer Lista Rango API - Documentação

## Listar todos os restaurantes

`GET /restaurant`

**endpoint:** GET http://localhost:3001/restaurant

Retorno:

    [
    {
        "id": 1,
        "name": "Mais Sabor",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0rm36h5J9yfG_Cb37l48DrJMS4TsUJBdhw&usqp=CAU"
    },
    {
        "id": 2,
        "name": "Restaurante da Ilha",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-c5QYggP1bi9wBT16MJO9ULK-oDQAoEFzA&usqp=CAU"
    },
    {
        "id": 3,
        "name": "Café Gourmet",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0ZRmXBJYtQz4Ip5iZfT44GsmfgxHPL5-EA&usqp=CAU"
    }
    ]

## Listar um restaurante pelo id

`GET /restaurant/:id`

**endpoint:** GET http://localhost:3001/restaurant/:id (http://localhost:3001/restaurant/1)

Retorno:

    {
        "id": 1,
        "name": "Mais Sabor",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0rm36h5J9yfG_Cb37l48DrJMS4TsUJBdhw&usqp=CAU",
        "address": {
            "street": "Rua das Flores",
            "number": 20,
            "complement": "",
            "city": "Belo Horizonte",
            "state": "Minas Gerais",
            "postal_code": 35680000
        },
        "hours": [
            {
            "day_week": 1,
            "start": "18:00:00",
            "end": "22:00:00"
            },
            {
            "day_week": 2,
            "start": "18:00:00",
            "end": "22:00:00"
            },
            {
            "day_week": 3,
            "start": "18:00:00",
            "end": "22:00:00"
            },
            {
            "day_week": 4,
            "start": "18:00:00",
            "end": "22:00:00"
            },
            {
            "day_week": 5,
            "start": "18:00:00",
            "end": "22:00:00"
            }
        ]
    }

- A chave `hours` é um array que indica o horário de funcionamento do restaurante a cada dia da semana. Em cada posição do array temos uma chave `day_week` que representa do dia da semana da seguinte forma:

    ```
    1: segunda-feira
    2: terça-feira
    3: quarta-feira
    4: quinta-feira
    5: sexta-feira
    6: sábado
    7: domingo
    ```

## Cadastrar novo restaurante

`POST /restaurant`

**endpoint:** POST http://localhost:3001/restaurant

Para cadastrar um novo restaurante as seguintes informações devem ser enviadas no corpo da requisição:

    {
        "name": "Novo Sabor",
        "image_url": "",
        "address": {
            "street": "Rua Bela",
            "number": 10,
            "complement": "",
            "city": "Belo Horizonte",
            "state": "Minas Gerais",
            "postal_code": 35680490
        },
        "hours": [
            {
            "day_week": 3,
            "start": "18:00:00",
            "end": "22:00:00"
            },
            {
            "day_week": 4,
            "start": "18:00:00",
            "end": "22:00:00"
            },
            {
            "day_week": 5,
            "start": "18:00:00",
            "end": "22:00:00"
            }
        ]
    }

- Em caso de sucesso, a API retorna o status http `401` e o seguinte corpo na resposta:

    ```
    {
        "message": "Registration successful"
    }
    ```

- Quando a requisição é feita com os dados incompletos, ou seja, alguma informação obrigatória não é enviada, a API retorna o status http `400`e o seguinte corpo de resposta:

    ```
    {
        "message": "Incomplete registration information"
    }
    ```

## Atualizar dados de um restaurante

`PUT /restaurant/:id`

**endpoint:** PUT http://localhost:3001/restaurant/:id (http://localhost:3001/restaurant/1)

Para atualizar dados de um restaurante, deve ser enviado no corpo da requisição um json que contenha as chaves: `name`, `image_url`, `address` e `hours`, como mostrado abaixo:

    {
        "name": "Mais Sabor",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HB-InWtlScbuScMKIB8TdugN3ilpzL5uWw&usqp=CAU",
        "address": {
            "street": "Rua das Flores",
            "number": 20,
            "complement": "",
            "city": "Belo Horizonte",
            "state": "Minas Gerais",
            "postal_code": 35680000
        },
        "hours": [
            {
            "day_week": 4,
            "start": "18:00:00",
            "end": "22:00:00"
            },
            {
            "day_week": 5,
            "start": "18:00:00",
            "end": "22:00:00"
            }
        ]
    }

O retorno da requisição será um json com os dados atualizados, como mostrado abixo:

    {
        "id": 1,
        "name": "Mais Sabor",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HB-InWtlScbuScMKIB8TdugN3ilpzL5uWw&usqp=CAU",
        "address": {
            "street": "Rua das Flores",
            "number": 20,
            "complement": "",
            "city": "Belo Horizonte",
            "state": "Minas Gerais",
            "postal_code": 35680000
        },
        "hours": [
            {
            "day_week": 4,
            "start": "18:00:00",
            "end": "22:00:00"
            },
            {
            "day_week": 5,
            "start": "18:00:00",
            "end": "22:00:00"
            }
        ]
    }

## Deletar um restaurante

`DELETE /restaurant/:id`

**endpoint:** DELETE http://localhost:3001/restaurant/:id

- Quando o registro é apagado com sucesso, a API retorna o status http `204` e o corpo da resposta vazio.

- No caso de não existir no banco o registro que está sendo solicitado a deleção pelo endpoint, a API retorna o status http `404` e a seguinte mensagem no corpo da resposta:

    ```
    {
        "message": "Restaurant not found"
    }
    ```

Importante: os endpoints listados estão utilizando a porta 3001 para rodar o servidor Node. Caso utilize outra porta, é importante trocar o endereço do endpoint.
