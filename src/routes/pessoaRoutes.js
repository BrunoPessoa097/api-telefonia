import { Router } from 'express';
import { criarPessoa, 
        listarPessoas,
        buscarPessoaPorId,
        excluirPessoaId
       } from '../controllers/pessoaControllers.js';

const pessoaRoute = Router();

pessoaRoute.route('/pessoa')
  .get(listarPessoas)
  .post(criarPessoa);
pessoaRoute.route('/pessoa/:id')
  .get(buscarPessoaPorId)
  .delete(excluirPessoaId);

export default pessoaRoute;