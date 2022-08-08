const db = require('../Database/conn');
const express = require('express');
const router = express.Router();
const query = db;



router.get('/visualizar',(req,res)=>{

    async function select (){
      const banco = await query.conexao();
      const [rows] = await banco.query('SELECT * FROM `servidors`; ');
      return rows;
    }

    async function retorno () { 
        try {
            const result = await select ();
            res.status(200).json(result);
          } catch (error) {
            res.status(500).json({'msg':'Erro interno no servidor'})
        };
    }

    retorno ();
});


module.exports = router;