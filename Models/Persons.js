const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, 'Name must be at least 3 characters long'], // Validação de comprimento
  },
  number: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(\d{2,3})-\d{5,}$/.test(v); // Validação do número de telefone
      },
      message: 'Phone number is not valid!',
    },
  },
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
