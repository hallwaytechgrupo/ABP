
# Backlog

| ID | Tipo | Descrição | Prioridade | Status | Pontuação | Responsável |
|--|--|--|--|--|--|--|
| [01](#rf-01) | RF | As páginas devem possuir um mecanismo de navegação comum (menu de navegação) que, ao ser clicado, remete o usuário à seção correspondente;|  | A fazer |  |  |
| [02](#rf-02) | RF | O usuário deve ser capaz de se auto cadastrar, informando seu nome completo, e-mail e senha;|  | A fazer |  |  |
| [03](#rf-03) | RF | O usuário deve ser capaz de efetuar autenticação utilizando e-mail do cadastro e senha; |  | A fazer |  |  |
| [04](#rf-04) | RF | O sistema deve manter um cadastro de questões, com alternativas verdadeira ou falsa, referentes aos tópicos apresentados nas páginas do portal; |  | A fazer |  |  |
| [05](#rf-05) | RF | Aos usuários logados, o sistema deve exibir 3 questões para cada tópico. As questões devem contemplar o tema abordado no tópico;|  | A fazer |  |  |
| [06](#rf-06) | RF | O usuário não logado pode acessar o conteúdo das páginas (tópicos) do curso, mas não pode visualizar as questões; |  | A fazer |  |  |


# Backlog - Projeto

<a name="rf-01"></a>

## 01 - Requisito Funcional
- As páginas devem possuir um mecanismo de navegação comum (menu de navegação) que, ao ser clicado, remete o usuário à seção correspondente.

### **Histórias de Usuário:**
- **Como** um visitante do site, **eu quero** um menu de fácil de navegação, entendimento, acessibilidade, **para que** eu possa acessar os conteúdos de forma rápida.

### **DoD - Definition of Done:**
- Existência de menu fixo na página com links para as respectivas páginas sobre scrum.

### **Tarefas:**
- Criar um design no Figma de um menu fixo.

___________________________________________

<a name="rf-02"></a>

## 02 - Requisito Funcional
- O usuário deve ser capaz de se auto cadastrar, informando seu nome completo, e-mail e senha.

### **Histórias de Usuário**
- **Como** um visitante do site, **eu quero** me cadastrar com meu nome completo, e-mail e senha, **para que** eu possa ter acesso a certas funcionalidades.

### **DoD - Definition of Done**
- Tela de registro intuitiva.
- Validação dos campos de nome completo, e-mail e senha.
- Senhas armazenadas em hash seguro (bcrypt, Argon2, etc.).
- Registro do usuário no sistema e o redirecionamento/atualização da página com o login.

### **Tarefas:**
- Criar tela de registro de Usuário no Figma, utilizando o template base (com o menu fixo)
	- A tela deve ter os campos de entrada de dados:
		- Nome Completo.
		- E-mail.
		- Senha.
___________________________________________

<a name="rf-03"></a>

## 03 - Requisito Funcional
- O usuário deve ser capaz de efetuar autenticação utilizando e-mail do cadastro e senha;

### **Histórias de Usuário:**
**Como um** visitante do site/usuário não logado, **eu quero** fazer o login com meu e-mail e senha, **para que** eu possa ter acesso a certas funcionalidades.

### **DoD - Definition of Done**
- Tela de registro simples e intuitiva.
- Validação dos campos de e-mail e senha.

### **Tarefas:**
- Criar tela de login de Usuário no Figma, utilizando o template base (com o menu fixo)
	- A tela deve ter os campos de entrada de dados:
		- E-mail.
		- Senha.

___________________________________________

<a name="rf-04"></a>

## 04 - Requisito Funcional
- O sistema deve manter um cadastro de questões, com alternativas verdadeira ou falsa, referentes aos tópicos apresentados nas páginas do portal;

### **Histórias de Usuário**
- 

### **DoD - Definition of Done**
- 

### **Tarefas:**
- 
___________________________________________

<a name="rf-05"></a>

## 05 - Requisito Funcional
- Aos usuários logados, o sistema deve exibir 3 questões para cada tópico. As questões devem contemplar o tema abordado no tópico.

### **Histórias de Usuário**
- **Como um** usuário logado, **eu quero** que o sistema me apresente três questões por tópico, **para que** eu possa ter uma avaliação justa do meu conhecimento.
### **DoD - Definition of Done**
- Section intuitiva e simples na página de conteúdo, como um quizz, para o usuário responder as questões do respectivo tópico **OU** - Página intuitiva e simples destinada ao questionário, onde o usuário deverá responder todas as questões.
- Quizz deve aparecer apenas para usuários logados.
- Mecanismo para apresentar questões aleatoriamente aos usuários, categorizado por tópico.

### **Tarefas:**
- Tela base (esqueleto) no Figma para o Quizz.

___________________________________________

<a name="rf-06"></a>

## 06 - Requisito Funcional
- O usuário não logado pode acessar o conteúdo das páginas (tópicos) do curso, mas não pode visualizar as questões;

### **Histórias de Usuário:**

- **Como** um visitante, **eu quero** ter acesso ao conteúdo do curso, **mas não quero** ter acesso às questões antes de me cadastrar ou logar.

### **Definition of Done:**
- As páginas de conteúdo dos tópicos são visíveis para todos os usuários.
- O site deve ter telas específicas para o ensinamento do Scrum.
- O site deve possuir um menu fixo no topo (navbar), com os links para os respectivos conteúdos/páginas, exemplo: O que é Scrum, Ferramentas, etc.
- **RNF 02 -** As páginas devem ser organizadas em uma sequência lógica para o aprendizado do Scrum com um mecanismo para o usuário navegar para a próxima página e página anterior;
- **RNF 03** - O curso deve cobrir os conhecimentos necessários para o aprendizado do Scrum.
- **RNF 04** - O curso deve seguir uma sequência lógica necessária para o aprendizado do Scrum.
- O quizz não aparece para usuários não logados.

### **Tarefas:**
1. Pesquisa de Conteúdo:
 - Página Inicial (Home)
 - Módulo 1: Fundamentos do Scrum
 - **O que é Scrum?** Definição, histórico e comparação com métodos tradicionais.
 - **Princípios e Valores:** Explicação detalhada dos pilares e valores do Scrum.
 - **Papéis do Scrum:** Product Owner, Scrum Master e Time de Desenvolvimento.
 - **Artefatos do Scrum:** Product Backlog, Sprint Backlog e Incremento.
 - Módulo 2: Eventos do Scrum e Fluxo de Trabalho
 - Sprint Planning: Detalhes sobre o planejamento de cada Sprint.
 - Daily Scrum: Propósito e formato da reunião diária.
 - Sprint Review: Demonstração do trabalho concluído e coleta de feedback.
 - Sprint Retrospective: Melhoria contínua do processo.
 - **Fluxo de Trabalho do Scrum:**
 - Visualização do ciclo de vida de uma Sprint, desde o planejamento até a revisão.
 - Módulo 3: Ferramentas e Áreas de Aplicação
 - **Boards visuais:** Kanban, Scrum Board.
 - **Ferramentas de gestão de projetos:** Jira, Trello, Asana.
 - **Ferramentas de colaboração:** Slack, Microsoft Teams.
 - **Ferramentas de versionamento:** Git.
 - **Áreas de Aplicação do Scrum:**
 - **Desenvolvimento de software:** Criação de aplicativos, sistemas e plataformas.
 - **Marketing e design:** Gestão de projetos criativos e campanhas.
 - **Gestão de produtos:** Desenvolvimento e lançamento de novos produtos.
 - **Outras áreas:** Recursos humanos, operações, etc.
2. Criar estrutura do projeto no Figma de forma que cada tópico e subtópico tenha sua própria tela.

___________________________________________
