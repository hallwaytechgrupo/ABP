
# Sprint 2

## Links úteis
[![Trello](https://img.shields.io/static/v1?style=for-the-badge&label=&color=black&logo=trello&message=Trello)](https://trello.com/b/pvZsrUjm/sprint-02) 
[![Website](https://img.shields.io/static/v1?style=for-the-badge&label=&color=black&logo=htmx&message=Visitar%20Website)](https://hallwaytechgrupo.github.io/ABP-2024-2/) 

## Entregas

| ID | Tipo | Descrição | Prioridade | Status | Responsável | Pontuação total |
|--|--|--|--|--|--|--|
| [01](#rf-01) | RF | As páginas devem possuir um mecanismo de navegação comum (menu de navegação) que, ao ser clicado, remete o usuário à seção correspondente; | Baixa | 🔨 Em trabalho | Nome | 6 |
| [02](#rf-02) | RF | O usuário deve ser capaz de se auto cadastrar, informando seu nome completo, e-mail e senha;| Baixa | 🔨 Em trabalho | Nome | 6 |
| [03](#rf-03) | RF | O usuário deve ser capaz de efetuar autenticação utilizando e-mail do cadastro e senha; | Baixa | 🔨 Em trabalho | Nome | 6 |
| [05](#rf-05) | RF | Aos usuários logados, o sistema deve exibir 3 questões para cada tópico. As questões devem contemplar o tema abordado no tópico;| Média | 🔨 Em trabalho | Nome | 15 |
| [06](#rf-06) | RF | O usuário não logado pode acessar o conteúdo das páginas (tópicos) do curso, mas não pode visualizar as questões; | Alta | 🔨 Em trabalho | Nome | 30 |
| [09](#rf-09) | RF   | O sistema deve ser capaz de emitir o certificado de conclusão para os usuários que foram aprovados em todos os tópicos; | Baixa | ⏸️ Pendente | 5

<center>

## Burndown:
![image](./content/sprint-02/burndown-11-10-2024.png)
> Atualizado em 11/10/2024

</center>

# Backlog - Sprint 2
## Requisito, Histórias de Usuário, DoD e Tarefas 
- A sprint tem uma pontuação total de X pontos.
<a name="rf-01"></a>

## 01 - Requisito Funcional
- As páginas devem possuir um mecanismo de navegação comum (menu de navegação) que, ao ser clicado, remete o usuário à seção correspondente.

### **Histórias de Usuário:**
- **Como** um visitante do site, **eu quero** um menu de fácil de navegação, entendimento, acessibilidade, **para que** eu possa acessar os conteúdos de forma rápida.

### **DoD - Definition of Done:**
- Existência de menu fixo na página com links para as respectivas páginas sobre scrum.

### **Base:**
![image](./content/sprint-02/figma/menu.png)
![image](./content/sprint-02/figma/rodape.png)


### **Tarefas:**
1. Criar o HTML do menu fixo, com base no Figma.
    - **Estimativa:** 2
    - **Pontuação:** 2
    - **Responsável:** Marcos.
    - **Descrição:** Criar HTML do menu e rodapé, com base no Figma.
    - [Link da Tarefa - Menu](https://trello.com/c/0Z7c6wYO)
    - [Link da Tarefa - Rodapé](https://trello.com/c/4mYkfVpV)
2. Criar o CSS do menu fixo, com base no Figma.
    - **Estimativa:** 3
    - **Pontuação:** 3
    - **Responsável:** A definir
    - **Descrição:** Criar CSS do menu e rodapé, com base no Figma.
    - [Link da Tarefa - Menu](https://trello.com/c/2Z08aGrf)
    - [Link da Tarefa - Rodapé](https://trello.com/c/UeDXojue)

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

### **Base**:
![image](./content/sprint-02/figma/cadastro.png)

### **Tarefas:**
1. Criar o HTML do Cadastro/Registro, com base no Figma.
    - **Estimativa:** 2
    - **Pontuação:** 2
    - **Responsável:** Lucas.
    - **Descrição:** -
2. Criar o CSS do Cadastro/Registro, com base no Figma.
    - **Estimativa:** 3
    - **Pontuação:** 3
    - **Responsável:** A definir
    - **Descrição:** -
___________________________________________

<a name="rf-03"></a>

## 03 - Requisito Funcional
- O usuário deve ser capaz de efetuar autenticação utilizando e-mail do cadastro e senha;

### **Histórias de Usuário:**
**Como um** visitante do site/usuário não logado, **eu quero** fazer o login com meu e-mail e senha, **para que** eu possa ter acesso a certas funcionalidades.

### **DoD - Definition of Done**
- Tela de registro simples e intuitiva.
- Validação dos campos de e-mail e senha.

### **Base**:
![image](./content/sprint-02/figma/login.png)

### **Tarefas:**
1. Criar o HTML do Login, com base no Figma.
    - **Estimativa:** 2
    - **Pontuação:** 2
    - **Responsável:** Lucas.
    - **Descrição:** -
2. Criar o CSS do Login, com base no Figma.
    - **Estimativa:** 3
    - **Pontuação:** 3
    - **Responsável:** A definir
    - **Descrição:** -

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

### **Base**:
![image](./content/sprint-02/figma/questionario.png)

### **Tarefas:**
**1, 2 e 3**. Criar o HTML do Questionário do Módulo 1, 2 e 3, com base no Figma.
    - **Estimativa:** 6 (2 cada)
    - **Pontuação:** 6 (2 cada)
    - **Responsável:** Vinícius
    - **Descrição:** -
**4, 5 e 6**. Criar o CSS do Questionário do Módulo 1, 2 e 3, com base no Figma.
    - **Estimativa:** 9 (3 cada)
    - **Pontuação:** 9 (3 cada)
    - **Responsável:** A definir
    - **Descrição:** -
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
1. Criar CSS Global para ser utilizado nas páginas.
    - **Estimativa:** 3
    - **Pontuação:** 3
    - **Responsável:** A Definir.
    - **Descrição:** A ideia do CSS Global é facilitar o desenvolvimento das páginas, nele deve estar especificado a fonte utilizada, cores, definição dos estilos de botões, etc.

2. Criar o HTML da Home, Módulo 1, 2 e 3, com base no Figma.
    - **Estimativa:** 8 (2 cada)
    - **Pontuação:** 8 (2 cada)
    - **Responsável:** Módulo 1 - Ariel, Módulo 2 - Yan, Módulo 3 - Mário
    - **Descrição:** -
3. Criar o CSS da Home, Módulo 1, 2 e 3, com base no Figma.
    - **Estimativa:** 12 (3 cada)
    - **Pontuação:** 12 (3 cada)
    - **Responsável:** Módulo 1 - A definir, Módulo 2 - A definir, Módulo 3 - A definir
    - **Descrição:** -
4. Criar imagens por IA ou gerar imagens para colocar no Módulo 3.
    - **Estimativa:** 2
    - **Pontuação:** 2
    - **Responsável:** Ariel.
    - **Descrição:** -
5. Utilizar as imagens da tarefa 3 e colocá-las no Módulo 3.
    - **Estimativa:** 2
    - **Pontuação:** 2
    - **Responsável:** A Definir.
    - **Descrição:** -

___________________________________________

<a name="rf-09"></a>

## 09 - Requisito Funcional
- O sistema deve ser capaz de emitir o certificado de conclusão para os usuários que foram aprovados em todos os tópicos;

### **Histórias de Usuário**
- **Como um** usuário, **eu quero** receber um certificado ao concluir todos os tópicos do curso, **para que** eu possa comprovar meu conhecimento.

### **DoD - Definition of Done**
- O sistema deve gerar um certificado em PDF com os dados do usuário e a data de conclusão.

### **Base**:
![image](./content/sprint-02/figma/certificado.png)

### **Tarefas:**
1. Criar o HTML do Certificado, com base no Figma.
    - **Estimativa:** 2
    - **Pontuação:** 2
    - **Responsável:** Lucas.
    - **Descrição:** -
2. Criar o CSS do Certificado, com base no Figma.
    - **Estimativa:** 3
    - **Pontuação:** 3
    - **Responsável:** A definir
    - **Descrição:** -