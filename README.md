# Projeto HallwayEducation

## Busca de Questões no Banco

A busca de questões no banco de dados é realizada através do serviço `quiz.service.js`. O serviço `getQuestoesByModulo` faz uma requisição à API para obter as questões de um módulo específico:

```js
import { api } from './../apiSetup.js';

export const getQuestoesByModulo = async (modulo) => {
  try {
    const response = await api.get(`/quiz/modulo/${modulo}`);
    console.log('[Q] Questões por módulo obtidas com sucesso:', response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Erro ao obter questões por módulo:', error);
    throw error;
  }
};
```

## Armazenamento no LocalStorage

As questões obtidas são armazenadas no `localStorage` para evitar requisições repetidas ao banco de dados, caso as questões permaneçam as mesmas. Isso melhora a performance e reduz a carga no servidor.

### Exemplo de Armazenamento

Quando o usuário faz login pela primeira vez, as questões de cada módulo são buscadas e armazenadas no `localStorage`:

```js
const primeiroAcesso = localStorage.getItem('primeiroAcesso');
const primeiroAcessoBoolean = primeiroAcesso === 'true';
if (primeiroAcessoBoolean) {
  console.log('[U] Primeiro acesso do usuário');
  for (let i = 1; i <= 3; i++) {
    getQuestoesByModulo(i).then((response) => {
      const questoes = response.data;
      localStorage.setItem(
        modulo-${i},
        JSON.stringify(questoes));
      localStorage.setItem('primeiroAcesso', false);
    });
  }
}
```

## Motivo do Armazenamento

Armazenamos as questões no `localStorage` para evitar requisições desnecessárias ao servidor. Como as questões de um módulo não mudam frequentemente, podemos reutilizar os dados armazenados localmente, melhorando a experiência do usuário e a eficiência do sistema.

### Verificação e Carregamento

Antes de iniciar um quiz, verificamos se as questões já estão armazenadas no `localStorage`. Se não estiverem, fazemos a requisição ao servidor e armazenamos os dados:

```js
if (!localStorage.getItem(

modulo-${moduleNumber}

)) {
  getQuestoesByModulo(Number.parseInt(moduleNumber)).then((response) => {
    const questoes = response.data;
    localStorage.setItem(

modulo-${moduleNumber}

, JSON.stringify(questoes));
    console.log(' [Q] Questões do módulo', moduleNumber, 'salvas');
  });
} else {
  console.log(` [Q] Questões do módulo ${moduleNumber} já foram carregadas`);
}
```

Este processo garante que as questões sejam carregadas de forma eficiente, reduzindo a necessidade de requisições repetidas ao servidor.


## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
.gitignore
.unused/
.vscode/
assets/
components/
css/
img/
scripts/
```

### Diretórios e Arquivos Principais

- **.unused/**: Contém arquivos HTML que não estão sendo utilizados atualmente.
- **.vscode/**: Configurações específicas do Visual Studio Code.
- **assets/**: Arquivos de fontes e outros recursos estáticos.
- **components/**: Componentes HTML reutilizáveis, como cabeçalhos, rodapés e seções específicas.
- **css/**: Arquivos de estilo CSS para diferentes partes do projeto.
- **img/**: Imagens utilizadas no projeto.
- **scripts/**: Scripts JavaScript que controlam a lógica do projeto.

## Importação de Componentes

A importação de componentes é feita dinamicamente através do script `auto-import-components.js`. Este script carrega componentes HTML em elementos específicos da página, permitindo a reutilização de código e a manutenção mais fácil.

### Exemplo de Importação de Componente

```js
importarComponente('components/header.html', 'componente-header', () => {
  setupMobileMenu();
});
```

Neste exemplo, o componente `header.html` é carregado no elemento com o ID `componente-header`. Após a importação, a função `setupMobileMenu` é chamada para configurar o menu móvel.

## Renderização Condicional

A renderização condicional é utilizada para exibir ou ocultar componentes com base no estado do usuário (logado ou não logado) e outras condições específicas.

### Exemplo de Renderização Condicional

```js
if (usuarioLogado()) {
  importarComponente('components/profile.html', 'componente-login', () => {
    // Lógica adicional para usuários logados
  });
} else {
  importarComponente('components/login.html', 'componente-login', () => {
    // Lógica adicional para usuários não logados
  });
}
```

Neste exemplo, o componente `profile.html` é carregado se o usuário estiver logado, caso contrário, o componente `login.html` é carregado.

## Lógica dos Componentes

Cada componente possui sua própria lógica encapsulada em scripts JavaScript. Abaixo estão alguns exemplos de componentes e suas respectivas lógicas:

### Componente de Quiz

- **Arquivo HTML**: `components/quiz.html`
- **Lógica**: Controlada pelo script `quiz-criar-tentativa.js` e `quiz-respostas.js`.

### Componente de Login

- **Arquivo HTML**: `components/login.html`
- **Lógica**: Controlada pelo script `login.controller.js` e `login.service.js`.

### Componente de Perfil

- **Arquivo HTML**: `components/profile.html`
- **Lógica**: Controlada pelo script `profile.control.js` e `user.utils.js`.

## Conclusão

Este projeto utiliza uma estrutura modular para facilitar a manutenção e a escalabilidade. A importação dinâmica de componentes e a renderização condicional permitem uma experiência de usuário mais fluida e eficiente. Cada componente possui sua própria lógica, garantindo que o código seja organizado e fácil de entender.