## Backend
  O backend da aplicação foi desenvolvido com Node e Typescript. Como ORM foi utilizado o 
  Sequelize e para gerenciamente das rotas o Express.
  A arquitetura MSC foi utilizada de forma a separarar as responsabilidades em três camadas:
   Model, Service e Controller.
  Essa arquitetura foi escolhida de forma a facilitar a compreensão do código, facilitar a manutenção e permitir escalabilidade.
  Para validação dos dados das requisições foi utilizado o Joi.

## Validações das requisições para criar e editar registros:
  - Nome: Campo requerido. Minimo de 4 caracteres. Não permite caracteres especiais ou numeros.
  - Email: Campo requerido.
  - Telefone: Campo requerido. Aceita strings nos formatos 'xx xxxxx-xxxx' ou 'xx xxxx-xxxx'.
  - CPF: Campo requerido. String com 11 caracteres. Não aceita strings onde todos os caracteres são iguais.
    - Para este campo optei por não fazer a verificação oficial de CPF onde é feito um calculo com base nos digitos verificadores, visto que é usado dados ficticios.
  - Status: Campo requerido. Somente aceita os seguintes valores:
    - Ativo;
    - Inativo;
    - Aguardando ativação;
    - Desativado;

## API
  Os endpoints criados para api podem ser visualizados abaixo:

  1. **Lista de clientes:
        /users/

  - Este endpoint do tipo 'get' retorna uma lista com todos os clientes cadastrados no banco de dados:
    - exemplo:

    ```json
    [
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
      }
    ]

    ```

  2. **Buscar um cliente pelo id:
        /users/:id

  - Este endpoint do tipo 'get' retorna o registro do cliente de acordo com o id informado na url. Caso nenhum registro seja encontrado, retorna o status 204:
    - exemplo:

    ```json  
    {
        "id": 1,
        "name": "Alan Wake",
        "email": "alan@uol.com",
        "cpf": "06628787066",
        "phone": "48 99699-9977",
        "status": "Ativo"
    }
    ```

  3. **Criar um cliente:
        /users
  
  - Este endpoint do tipo 'post' aceita requisições no formato abaixo. E caso algum erro seja encontrado no formato da requisição retorna uma mensagem avisando o que deve ser corrigido.
    - exemplo da requisição:

    ```json

    {	
      "name": "Carlos Leal",
      "email": "carlos@tst.com",
      "cpf": "01828654500",
      "phone": "51 9999-9999",
      "status": "Ativo"
    }
    ```

    - exemplo da mensagem de erro:

    ```json
    {
      "message": "O CPF deve conter 11 digitos."
    }
    ```

  4. **Atualizar o registro de um cliente:
        /user/:id

  - Este endpoint do tipo 'patch' aceita requisições no formato abaixo. E caso algum erro seja encontrado no formato da requisição retorna uma mensagem avisando o que deve ser corrigido. São executadas as mesmas validações para o formato da requisição que o endpoint 'post' /users.

    ```json

    {	
      "name": "Carlos Leal",
      "email": "carlos@tst.com",
      "cpf": "01828654500",
      "phone": "51 9999-9999",
      "status": "Ativo"
    }
    ```

    - exemplo da mensagem de erro:

    ```json
    {
      "message": "\"Telefone\" deve estar no formato (xx) xxxx-xxxx ou (xx) xxxxx-xxxx"
    }
    ```

    