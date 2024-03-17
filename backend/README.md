## Backend
  O backend da aplicação foi desenvolvido com Node e Typescript. Como ORM foi utilizado o 
  Sequelize e para gerenciamente das rotas o Express.
  A arquitetura MSC foi utilizada de forma a separarar as responsabilidades em três camadas:
   Model, Service e Controller.
  Essa arquitetura foi escolhida de forma a facilitar a compreensão do código, facilitar a manutenção e permitir escalabilidade.
  Para validação dos dados das requisições foi utilizado o Joi.

## API
  Os endpoints criados para api podem ser visualizados abaixo:

  1. **Lista de clientes:
        /users/

  - Este endpoint do tipo 'get' retorna uma lista com todos os clientes cadastrados no banco de dados:
    - exemplo:
      [<br>
        {
          "id": 1,
          "name": "Alan Wake",
          "email": "alan@uol.com",
          "cpf": "06628787066",
          "phone": "48 99699-9977",
          "status": "Ativo"
        },
        {
          "id": 2,
          "name": "Geralt of Rivia",
          "email": "geralt@uol.com",
          "cpf": "06628787079",
          "phone": "89 96789-9879",
          "status": "Inativo"
        },
        {
          "id": 3,
          "name": "Luke Skywalker",
          "email": "luke@uol.com",
          "cpf": "06628787099",
          "phone": "99 96989-9979",
          "status": "Aguardando ativação"
        },
        {
          "id": 4,
          "name": "Jesse Faden",
          "email": "jesse@uol.com",
          "cpf": "06628787041",
          "phone": "89 9955-9789",
          "status": "Desativado"
        }
      ]

  2. **Buscar um cliente pelo id:
        /users/:id

  - Este endpoint do tipo 'get' retorna o registro do cliente de acordo com o id informado na url. Caso nenhum registro seja encontrado, retorna o status 204:
    - exemplo:

    {
      "id": 1,
      "name": "Alan Wake",
      "email": "alan@uol.com",
      "cpf": "06628787066",
      "phone": "48 99699-9977",
      "status": "Ativo"
    }