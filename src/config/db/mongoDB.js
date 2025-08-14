import mongoose from 'mongoose';
import dotenv from 'dotenv';

// configurações do ambiente.
dotenv.config();

const url = process.env.MONGODB_URI;

// verificação basica de variavel.
if (!url) console.error('erro na variável ');

// conexão com o banco de dados.
mongoose.connect(url)
  .then(()=>{
    console.log('conectado');
  })
  .catch((err)=>{
    console.error(err);
  });

export default mongoose;
