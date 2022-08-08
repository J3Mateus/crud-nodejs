const db = require('../Database/conn');
const express = require('express');
const router = express.Router();
const query = db;

router.post('/cadastro',(req,res)=>{

    console.log()
    async function insert (){
     const {nome,email,nomeUsuario,senha,codSIAPE,sexo} = req.body; 
     const sql = 'INSERT INTO servidors(nome,email,nomeUsuario,senha,codSIAPE,sexo) VALUES (?,?,?,?,?,?) ;';
     const values = [nome,email,nomeUsuario,senha,codSIAPE,sexo];

      try{
        const banco = await query.conexao();
        const ResultSetHeader = await banco.query(sql,values);
      }catch(error){
        console.log(error)
      }
    }

     async function retorno () { 
        try {
            await insert ();
            res.status(201).json({'msg':'inserido com sucesso'});
          } catch (error) {
            res.status(500).json({'msg':'Erro interno no servidor'})
        };
    }

    retorno ();
});

module.exports = router;