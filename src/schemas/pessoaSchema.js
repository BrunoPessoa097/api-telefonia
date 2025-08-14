import mongoose from '../config/db/mongoDB.js';

// criando a schema para pessoa.
const pessoaSchema = new mongoose.Schema({
  nome: {type: String, required: true},
  telefone: {type: String, required: true},
  email: {type: String, required: true},
  endereco: {type: String, required: true},
  dataNascimento: {type: Date, required:false},
  dataCriacao: {type: Date, default: Date.now},
  dataAtualizacao: {type: Date, default:Date.now}
});

const pessoa = mongoose.model('Pessoa',pessoaSchema);

export default pessoa;
