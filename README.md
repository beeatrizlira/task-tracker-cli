
# Task Tracker CLI

Task Tracker CLI é um gerenciador de tarefas simples e eficiente, acessado diretamente pelo terminal. Este projeto permite que você adicione, liste, e gerencie suas tarefas diárias usando comandos rápidos e fáceis no CLI.

## Funcionalidades

- **Adicionar Tarefas**: Crie novas tarefas com uma descrição e um status inicial.
- **Listar Tarefas**: Veja todas as suas tarefas ou filtre-as por status (todo, in-progress, done).
- **Atualizar Tarefas**: Altere o status ou descrição de uma tarefa específica.
- **Remover Tarefas**: Exclua tarefas concluídas ou indesejadas.

## Requisitos

- Node.js v14 ou superior
- npm ou yarn
- TypeScript

## Instalação

Clone o repositório e instale as dependências:

\```bash
git clone https://github.com/seu-usuario/task-tracker-cli.git
cd task-tracker-cli
npm install
\```

### Configuração

Após a instalação, você pode construir o projeto usando:

\```bash
npm run build
\```

### Uso

O `task-cli` é o comando principal que você utilizará para gerenciar suas tarefas. Aqui estão alguns exemplos de como usá-lo:

#### Adicionar uma Tarefa

\```bash
task-cli add "Minha nova tarefa"
\```

#### Listar Todas as Tarefas

\```bash
task-cli list
\```

#### Filtrar Tarefas por Status

\```bash
task-cli list --filter todo
\```

#### Atualizar o Status de uma Tarefa

\```bash
task-cli mark-in-progress <task_id>
\```

#### Remover uma Tarefa

\```bash
task-cli delete <task_id>
\```

### Desenvolvimento

Durante o desenvolvimento, você pode usar o comando abaixo para iniciar o projeto em modo de desenvolvimento:

\```bash
npm start
\```

Para garantir a qualidade do código, use:

- **Lint**: Para analisar e encontrar problemas no código:
  \```bash
  npm run precommit
  \```

- **Formatação**: Para garantir que o código siga um padrão consistente:
  \```bash
  npm run format
  \```

### Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto.

### Licença

Este projeto está licenciado sob a licença ISC. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.
