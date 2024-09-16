
# Backlog

| ID           | Tipo | Descrição                                                                                                                                                                        | Prioridade | Status  |
| ------------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------- |
| [01](#rf-01) | RF   | As páginas devem possuir um mecanismo de navegação comum (menu de navegação) que, ao ser clicado, remete o usuário à seção correspondente;                                       |            | A fazer |
| [02](#rf-02) | RF   | O usuário deve ser capaz de se auto cadastrar, informando seu nome completo, e-mail e senha;                                                                                     |            | A fazer |
| [03](#rf-03) | RF   | O usuário deve ser capaz de efetuar autenticação utilizando e-mail do cadastro e senha;                                                                                          |            | A fazer |
| [04](#rf-04) | RF   | O sistema deve manter um cadastro de questões, com alternativas verdadeira ou falsa, referentes aos tópicos apresentados nas páginas do portal;                                  |            | A fazer |
| [05](#rf-05) | RF   | Aos usuários logados, o sistema deve exibir 3 questões para cada tópico. As questões devem contemplar o tema abordado no tópico;                                                 |            | A fazer |
| [06](#rf-06) | RF   | O usuário não logado pode acessar o conteúdo das páginas (tópicos) do curso, mas não pode visualizar as questões;                                                                |            | A fazer |
| [07](#rf-07) | RF   | O usuário pode tentar responder as questões quantas vezes ele quiser até obter êxito;                                                                                            |            | A fazer |
| [08](#rf-08) | RF   | O sistema deve exibir as questões somente nos tópicos que o usuário não tenha sido aprovado. Para ser considerado aprovado no tópico é necessário acertar pelo menos 2 questões; |            | A fazer |
| [09](#rf-09) | RF   | O sistema deve ser capaz de emitir o certificado de conclusão para os usuários que foram aprovados em todos os tópicos;                                                          |            | A fazer |
| [10](#rf-10) | RF   | As questões devem ser cadastradas pelo administrador diretamente no SGBD PostgreSQL.                                                                                             |            | A fazer |
|              |      |                                                                                                                                                                                  |            |         |
| 01           | RNF  | Os conteúdos devem ser distribuídos em páginas atendendo aos princípios de arquitetura de informação;                                                                            |            | A fazer |
| 02           | RNF  | As páginas devem ser organizadas em uma sequência lógica para o aprendizado do Scrum com um mecanismo para o usuário navegar para a próxima página e página anterior;            |            | RF 06   |
| 03           | RNF  | O curso deve cobrir os conhecimentos necessários para o aprendizado do Scrum;                                                                                                    |            | RF 06   |
| 04           | RNF  | O curso deve seguir uma sequência lógica necessária para o aprendizado do Scrum;                                                                                                 |            | RF 06   |
| 05           | RNF  | As questões devem ser compatíveis com o conteúdo apresentado no tópico;                                                                                                          |            | RF 06   |
| 06           | RNF  | O visual deve ser responsivo.                                                                                                                                                    |            | A fazer |

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
- Criar o HTML e CSS do menu fixo, com base no Figma.

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
- Transcrição do Figma para HTML e CSS.
- Criar lógica em javascript para puxar os dados dos campos de login.
- Implementar a função de hash de senhas.
- Cadastrar (se o e-mail não existir) as credenciais em um banco de dados ou no local storage (a definir) e fazer o login automático.
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
- Transcrição do Figma para HTML e CSS.
- Criar lógica em javascript para puxar os dados dos campos de login.
- Implementar a função de verificação de credenciais.
- Implementar a função de hash de senhas.

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
- Transcrição do Figma para HTML e CSS.
- Implementar a lógica para aleatorizar as questões por tópico.

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
	1. O que é Scrum
	2. Qual o uso do Scrum (pode ser usado em algo além do desenvolvimento de softwares?)
	3. Quais as ferramentas e como utilizá-las
	4. O que é Sprint
	5. O que é Backlog do Projeto e Backlog da Sprint
	6. Como pontuar as atividades?
	7. User Stories (pesquisa bonus?)
2. Criar estrutura do projeto no Figma de forma que cada tópico e subtópico tenha sua própria tela.
3. Transcrever  cada tela do figma para HTML, CSS e JavaScript.

___________________________________________

<a name="rf-07"></a>

## 07 - Requisito Funcional
- O usuário pode tentar responder as questões quantas vezes ele quiser até obter êxito;

### **Histórias de Usuário** - Tentativas Ilimitadas por questão
- **Como** um usuário, **eu quero** poder tentar responder cada questão quantas vezes quiser, **para que** eu possa aprender com meus erros e fixar o conteúdo.

### **DoD - Definition of Done**
- O sistema deve permitir múltiplas tentativas para cada questão.
- O sistema deve fornecer feedback imediato sobre a resposta do usuário (certa ou errada).

___________________________________________

<a name="rf-08"></a>

## 08 - Requisito Funcional
- O sistema deve exibir as questões somente nos tópicos que o usuário não tenha sido aprovado. Para ser considerado aprovado no tópico é necessário acertar pelo menos 2 questões;

### **Histórias de Usuário**
- **Como um** usuário logado, **eu quero** que o sistema me mostre as questões apenas dos tópicos que eu ainda não completei, **para que** eu possa focar nos meus pontos fracos.

### **DoD - Definition of Done**
- O sistema deve rastrear o progresso do usuário em cada tópico.
- O sistema deve marcar um tópico como completo quando o usuário acertar pelo menos duas questões.
- O sistema deve ocultar as questões de tópicos já completos.

___________________________________________

<a name="rf-09"></a>

## 09 - Requisito Funcional
- O sistema deve ser capaz de emitir o certificado de conclusão para os usuários que foram aprovados em todos os tópicos;

### **Histórias de Usuário**
- **Como um** usuário, **eu quero** receber um certificado ao concluir todos os tópicos do curso, **para que** eu possa comprovar meu conhecimento.

### **DoD - Definition of Done**
- O sistema deve gerar um certificado em PDF com os dados do usuário e a data de conclusão.

___________________________________________

<a name="rf-10"></a>

## 10 - Requisito Funcional
- As questões devem ser cadastradas pelo administrador diretamente no SGBD PostgreSQL.

### **Histórias de Usuário**
- **Como um** administrador do sistema, **eu quero** cadastrar as questões sobre o Scrum, **para que** os usuários possam comprovar o entendimento da metodologia.

### **DoD - Definition of Done**
- Configurar o banco de dados PostgreSQL para armazenar as questões e suas respectivas respostas.

________________________________________________
## 03 - 04 - Requisito Não Funcional
- **RNF 03** - O curso deve cobrir os conhecimentos necessários para o aprendizado do Scrum
- **RNF 04** - O curso deve seguir uma sequência lógica necessária para o aprendizado do Scrum

### **Histórias de Usuário:**
- **Como** [tipo de usuário], **eu quero** [funcionalidade], **para que** [benefício].

### **Definition of Done:**
- O site deve ter telas específicas para o ensinamento do Scrum.
- O site deve possuir um menu fixo no topo (navbar), com os links para os respectivos conteúdos/páginas, exemplo: O que é Scrum, Ferramentas, etc.
 
### **Tarefas:**
1. Pesquisa de Conteúdo:
	1. O que é Scrum
	2. Qual o uso do Scrum (pode ser usado em algo além do desenvolvimento de softwares?)
	3. Quais as ferramentas e como utilizá-las
	4. O que é Sprint
	5. O que é Backlog do Projeto e Backlog da Sprint
	6. Como pontuar as atividades?
	7. User Stories (pesquisa bonus?)