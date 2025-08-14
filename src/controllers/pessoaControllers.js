import pessoa from '../schemas/pessoaSchema.js';

export const criarPessoa = async (req,res)=>{
  // desestruturação do objeto.
  const {
    nome,
    telefone,
    email,
    endereco,
    dataNascimento,
    dataCriacao
  } = req.body;
  // criando um objeto.
  const pessoaNova = new pessoa({
    nome: nome.trim().toUpperCase(),
    telefone: telefone.trim(),
    email: email.trim().toUpperCase(),
    endereco: endereco.trim(),
    dataNascimento,
    dataCriacao
  });
  
  try {
    const pessoaEncontrada = await buscarPessoa(nome);
    const pessoaEmail = await buscarPessoaEmail(email);
    
    if(pessoaEncontrada || pessoaEmail){
      return res.status(409).json({
        message: 'pessoa e/ou email ja existentes.'
      });
    }
    await pessoaNova.save();
    res.status(201).json({
      message: 'informacao inserida'
    });
    
  } catch (error) {
     res.status(500).json({
       message: 'erro',
       error: error.message
     });
  }
}

const  buscarPessoa = async(nome)=>{
  try{
    const nomePadrao = nome.trim().toUpperCase();
    return await pessoa.findOne({nome: nomePadrao});
  }catch(error){
    console.error(error);
    return null;
  }
}

const buscarPessoaEmail= async (email)=>{
  try{
    const emailPadrao = email.trim().toUpperCase();
    return await pessoa.findOne({email: emailPadrao});
  }catch(error){
    console.error(error);
    return null;
  }
}

export const listarPessoas = async (req,res)=>{
  try{
    // buscando todas os dados de pessoas.
    const pessoas = await pessoa.find();
    res.status(200).json(pessoas);
  }catch(error){
    res.status(500).json({
      message: 'erro',
      error: error.message
    })
  }
}

export const buscarPessoaPorId = async (req,res)=>{
  const { id } = req.params;

  try {
     const pessoaResult = await pessoa.findById(id);
    
    if(!pessoaResult){
      return res.status(404).json({
        message: 'Pessoa não encontrada.'
      });
    }
    res.status(200).json(pessoaResult);
  } catch (error) {
     res.status(500).json({
       message: error.message
     });
  }
  
}

export const excluirPessoaId = async (req, res)=>{
  const { id } = req.params;

  try{
    const pessoaResult = await pessoa.findByIdAndDelete(id);

    if(!pessoaResult){
      return res.status(404).json({
        message: 'Pessoa nao encontrada.'
      });
    }
    res.status(200).json({
      message: 'Pessoa Excluida.',
      pessoaResult
    });
  }catch(error){
    res.status(500).json({
      message: error.message
    })
  }
}