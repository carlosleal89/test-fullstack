## Tecnologias Utilizadas
  - A aplicação foi desenvolvida utilizando React e Typescript.
  - Para estilização foi utilizado Tailwind Css.
  - Para validação dos inputs foi utilizado a biblioteca Joi;
  - Para gerar os alertas de avisos foi utilizado o Sweetalert2;
  - Para as requisições foi utilizado o Axios;

 A tela principal exibe uma lista com os detalhes de cada cliente cadastrado no sistema.
 Nas telas de edição e criação de usuário os inputs aceitam dados nos seguintes formatos:
  - Nome: String com o minimo de 4 caracteres. Não aceita números ou caracteres especiais.
  - Email: String no formato padrão de emails.
  - CPF: String com 11 caracteres. Não aceita strings com todos os caracteres iguais.
  - Telefone: Aceita string nos formatos 'xx xxxxx-xxxx' ou 'xx xxxx-xxxx'.
  - Status: Input do tipo select com os seguintes valores:
    - Ativo;
    - Inativo;
    - Aguardando ativação;
    - Desativado;