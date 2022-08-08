const express = require('express');
const db = require('../Database/conn');
const router = express.Router();
const query = db ;


router.delete('/excluir/:id',(req,res)=>{
   async function deletar (){
    try {
      const id = req.params.id;

      const conexao = await query.conexao(); 
      let sql = 'Delete from servidors WHERE id=?'
      let value = [id]

     return await conexao.query(sql,value);
    } catch (error) {
        console.log(error)
    }
   }

   async function retorno (){
    try {
        const retorno = await deletar();
         res.status(202).json({'msg':'deletado com sucesso'})
      } catch (error) {
        res.status(500).json({'msg':'Error interno'})
      }
   }; 

    retorno ()
})

module.exports = router;