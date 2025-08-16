import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
// importando as variáveis do ambiente.
import dotenv from 'dotenv';
// importação de rotas.
import mongoRoute from './src/routes/mongoRoute.js';
import pessoaRoute from './src/routes/pessoaRoutes.js';
// configurações do ambiente.
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// mildwares.
app.use(express.json());
app.use(cors());
app.use(helmet());

// rotas.
app.use(mongoRoute);
app.use(pessoaRoute);

// rotas padrão.
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Rota Principal'
  });
});
// rota reset.
app.get('*',(req,res)=>{
  res.status(404).json({
    message: 'Rota não encontada',
    method: req.method,
    url: req.url,
    path: req.path
  });
});

app.listen(PORT,'0.0.0.0', () => {
  console.log('Server rodando');
});