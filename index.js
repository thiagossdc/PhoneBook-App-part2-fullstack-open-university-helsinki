const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3001;

// Dados da lista telefônica
const persons = [
  { id: 1, name: "Arto Hellas", number: "040-123456" },
  { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
  { id: 3, name: "Dan Abramov", number: "12-43-234345" },
  { id: 4, name: "Mary Poppendieck", number: "39-23-6423122" }
];

// Adicionar o morgan para logar as requisições
morgan.token('body', (req) => JSON.stringify(req.body)); // Cria o token "body" para logar o corpo das requisições

// Usar o morgan no middleware
app.use(morgan(':method :url :status :response-time ms - :body')); // Logando método, URL, status, tempo de resposta e corpo da requisição

// Para processar JSON em requisições POST
app.use(express.json()); 

// Rota para retornar a lista de pessoas
app.get('/api/persons', (req, res) => {
  res.json(persons);
});

// Rota para adicionar uma nova pessoa
app.post('/api/persons', (req, res) => {
  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).json({ error: 'Name or number missing' });
  }

  const existingPerson = persons.find(p => p.name === name);
  if (existingPerson) {
    return res.status(400).json({ error: 'name must be unique' });
  }

  const newPerson = {
    id: Math.floor(Math.random() * 1000000), // Geração de id aleatório
    name,
    number
  };

  persons.push(newPerson);
  res.status(201).json(newPerson);
});

App.delete('/api/persons/:id', (req, res) => {
  const { id } = req.params;

  deletePersonById(id)
    .then(() => {
      res.status(204).end(); // Resposta sem conteúdo após a exclusão
    })
    .catch(error => {
      res.status(400).json({ error: 'malformatted id' });
    });
});

// Inicializar o servidor
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
