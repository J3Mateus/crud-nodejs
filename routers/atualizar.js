const express = require('express');
const db = require('../Database/conn');
const router = express.Router();
const query = db ;


router.put('/atualizar/:id',(req,res)=>{
   async function atualizar (){
    try {
      const {nome} = req.body;
      const id = req.params.id;

      const conexao = await query.conexao(); 
      let sql = 'UPDATE servidors SET nome=? WHERE id=?'
      let value = [nome,id]
      console.log(value)
     return await conexao.query(sql,value);
    } catch (error) {
        console.log(error)
    }
   }

   async function retorno (){
    try {
        const retorno = await atualizar();
         res.status(202).json({'msg':'atualizado com sucesso'})
      } catch (error) {
        res.status(500).json({'msg':'Error interno'})
      }
   }; 

    retorno ()
})

module.exports = router;