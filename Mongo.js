const mongoose = require('mongoose');
const { getAllPersons, addPerson } = require('./models/person');

// Obtém a senha e os argumentos da linha de comando
const password = process.argv[2];

// Verifica se a senha foi fornecida
if (!password) {
  console.log('Please provide the password as the first argument');
  process.exit(1);
}

// URL de conexão com o MongoDB (substitua com sua própria URL)
const url = `mongodb+srv://<username>:${password}@cluster0.mongodb.net/phonebook?retryWrites=true&w=majority`;

// Conecta ao MongoDB
mongoose.connect(url)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });

// Adicionar uma nova pessoa
if (process.argv.length === 4) {
  const name = process.argv[3];
  const number = process.argv[4];

  addPerson(name, number)
    .then(() => {
      console.log(`added ${name} number ${number} to phonebook`);
      mongoose.connection.close(); // Fecha a conexão após salvar
    })
    .catch((error) => {
      console.error('Error saving the person:', error.message);
      mongoose.connection.close();
    });
}

// Listar todas as pessoas no banco de dados
if (process.argv.length === 3) {
  console.log('phonebook:');
  getAllPersons()
    .then(persons => {
      persons.forEach(person => {
        console.log(`${person.name} ${person.number}`);
      });
      mongoose.connection.close(); // Fecha a conexão após listar
    })
    .catch((error) => {
      console.error('Error fetching the phonebook entries:', error.message);
      mongoose.connection.close();
    });
}
