import mongoose from '../config/db/mongoDB.js';

// rota de teste para verificar banco de dados.
const testeMongo = (req,res)=>{
  // verifica se esta conectado.
  mongoose.connection.readyState === 1 ?
    res.status(200).json({
      message: 'banco ok'
    }):
    res.status(500).json({
      message: 'banco erro'
    });
};

export default testeMongo;