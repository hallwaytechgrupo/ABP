
# Documentação -  Sprint 3

[![Documentação do Banco de Dados](https://img.shields.io/static/v1?style=for-the-badge&label=&color=black&logo=googledocs&message=Documentacao%20BD)](https://dbdocs.io/Hallwaytech%20Grupo/scrum-server?view=table_structure)
[![Documentação da API](https://img.shields.io/static/v1?style=for-the-badge&label=&color=black&logo=swagger&message=API%20Docs)](https://abp-2024-2-server.onrender.com/api-docs/)
[![Documentação da API](https://img.shields.io/static/v1?style=for-the-badge&label=&color=black&logo=openapiinitiative&message=Rest%20API%20Docs)](https://bump.sh/hallwaytech/doc/hallwayeducation)
[![GitHub](https://img.shields.io/static/v1?style=for-the-badge&label=&color=black&logo=github&message=C%C3%B3digo%20Fonte%20Front)](https://github.com/hallwaytechgrupo/ABP-2024-2/tree/desenvolvimento) 
[![GitHub](https://img.shields.io/static/v1?style=for-the-badge&label=&color=black&logo=github&message=C%C3%B3digo%20Fonte%20Servidor)](https://github.com/hallwaytechgrupo/ABP-2024-2-server) 

## Documentação

### Banco de Dados

O banco de dados utilizado para a API de Quiz é composto pelas seguintes tabelas principais:

- **Usuários**: Armazena informações dos usuários, como nome, email e senha.
- **Questões**: Contém as perguntas que serão utilizadas nos quizzes, incluindo o texto da questão e a resposta correta.
- **Tentativas**: Registra as tentativas de quizzes feitas pelos usuários, incluindo o módulo, email do usuário e as respostas fornecidas.

### Por que o Banco de Dados **NÃO** foi normalizado
- Optamos por não normalizar completamente o banco de dados para simplificar o desenvolvimento e melhorar a performance em consultas específicas. A normalização pode introduzir complexidade adicional e, em alguns casos, pode não ser necessária para o escopo do projeto. As principais razões para não normalizar incluem:
1. **Desempenho**: A desnormalização pode reduzir o número de joins necessários em consultas, melhorando o desempenho.
2. **Simplicidade**: Manter um esquema de banco de dados mais simples facilita o desenvolvimento e a manutenção do código.
3. **Escopo do Projeto**: Para o tamanho e a complexidade do projeto atual, a desnormalização é suficiente para atender às necessidades sem comprometer a integridade dos dados.


### MER: 

![MER](/content/sprint-03/mer.png)

### Modelo Físico:

![Modelo Físico](/content/sprint-03/fisico.png)

___________________________________________

## Servidor

### Cadastro de Usuário

- **Rota**: `/user/signup`
- **Método**: `POST`
- **Descrição**: Insere um novo usuário.
- **JSON Esperado**:
  ```json
  {
    "nome": "Nome do Usuário",
    "senha": "Senha do Usuário",
    "email": "email@exemplo.com"
  }
  ```
- **Respostas**:
  - `201`: Usuário criado com sucesso.
  - `400`: Erro ao criar usuário.

### Login de Usuário

- **Rota**: `/user/login`
- **Método**: `POST`
- **Descrição**: Realiza o login do usuário.
- **JSON Esperado**:
  ```json
  {
    "email": "email@exemplo.com",
    "senha": "Senha do Usuário"
  }
  ```
- **Respostas**:
  - `200`: Login realizado com sucesso.
  - `401`: Credenciais inválidas.

### Obter Todas as Questões

- **Rota**: `/quiz/questoes`
- **Método**: `GET`
- **Descrição**: Retorna todas as questões.
- **Respostas**:
  - `200`: Lista de questões.

### Obter Questões por Módulo

- **Rota**: `/quiz/questoes/modulo/:modulo`
- **Método**: `GET`
- **Descrição**: Retorna questões por módulo.
- **Parâmetros**:
  - `modulo`: ID do módulo (1, 2 ou 3).
- **Respostas**:
  - `200`: Lista de questões do módulo.
  - `400`: Módulo não encontrado.

### Criar Tentativa

- **Rota**: `/quiz/tentativas`
- **Método**: `POST`
- **Descrição**: Cria uma nova tentativa.
- **JSON Esperado**:
  ```json
  {
    "modulo": 1,
    "email": "email@exemplo.com",
    "respostas": [
      { "idquestao": 1, "resposta": false },
      { "idquestao": 2, "resposta": true },
      { "idquestao": 3, "resposta": true }
    ]
  }
  ```
- **Respostas**:
  - `201`: Tentativa criada com sucesso, também retorna a NOTA e se foi APROVADO.
  - `400`: Número de respostas não corresponde ao número de questões.
  - `404`: Usuário não encontrado.

### Verificar Aprovação em um Módulo

- **Rota**: `/quiz/verificarAprovacao/:email/:modulo`
- **Método**: `GET`
- **Descrição**: Verifica se o usuário foi aprovado em um módulo.
- **Parâmetros**:
  - `email`: Email do usuário.
  - `modulo`: ID do módulo (1, 2 ou 3).
- **Respostas**:
  - `200`: Resultado da verificação de aprovação.
  - `404`: Nenhuma tentativa encontrada para este módulo e usuário.

### Verificar Aprovação em Todos os Módulos

- **Rota**: `/quiz/verificarAprovacaoTodosModulos/:email`
- **Método**: `GET`
- **Descrição**: Verifica se o usuário foi aprovado em todos os módulos.
- **Parâmetros**:
  - `email`: Email do usuário.
- **Respostas**:
  - `200`: Resultado da verificação de aprovação em todos os módulos.
  - `404`: Nenhuma tentativa encontrada para este usuário.

### Obter Todas as Tentativas de um Usuário

- **Rota**: `/quiz/tentativas/:email`
- **Método**: `GET`
- **Descrição**: Retorna todas as tentativas de um usuário.
- **Parâmetros**:
  - `email`: Email do usuário.
- **Respostas**:
  - `200`: Lista de tentativas do usuário.
  - `404`: Nenhuma tentativa encontrada para este usuário.

### Obter Módulo Único das Questões em uma Tentativa

- **Rota**: `/quiz/tentativa/:tentativaId/modulo`
- **Método**: `GET`
- **Descrição**: Retorna o módulo único das questões em uma tentativa.
- **Parâmetros**:
  - `tentativaId`: ID da tentativa.
- **Respostas**:
  - `200`: Módulo das questões na tentativa.
  - `404`: Nenhum módulo encontrado para esta tentativa.

___________________________________________

