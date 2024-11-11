# PhoneBook-App-part2-fullstack-open-university-helsinki
PhoneBook App for module 3 of FullStack developer course from University of Helsinki


# Phonebook App

Este é um aplicativo de lista telefônica completo que permite gerenciar contatos, incluindo operações de criação, leitura, atualização e exclusão (CRUD) de contatos. O aplicativo usa um backend em Node.js com Express e MongoDB como banco de dados, e o frontend foi desenvolvido em React.

## Funcionalidades

- Adicionar novos contatos com nome e número de telefone.
- Exibir todos os contatos salvos.
- Editar o número de telefone de um contato existente.
- Excluir contatos da lista.
- Validação de entrada para garantir nomes e números de telefone no formato correto.
- Data e hora da requisição exibidas na página de informações.
- Frontend integrado ao backend para operações sincronizadas.

## Estrutura do Projeto

- `backend/`: Contém o código do servidor, implementado com Node.js e Express.
- `frontend/`: Contém o código da interface do usuário em React.
- `models/`: Configuração do esquema Mongoose para o banco de dados MongoDB.
- `public/`: Diretório onde o frontend em produção é servido.
- `mongo.js`: Script para adicionar e listar contatos diretamente no banco de dados via linha de comando.
