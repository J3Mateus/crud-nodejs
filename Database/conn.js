const mysql = require('mysql2/promise');

async function conexao(){
    if (global.connection && global.connection.state!=='disconnected'){
        console.log('entrou')
        return global.connection;
    }else{
        try {
          const connection = await mysql.createConnection('mysql://root:@localhost:3306/SCCOS');
          global.connection = connection;
          console.log('Conectou');  
          return connection;
        } catch (error) {
          console.log(error)
        }
    }
}

module.exports = {conexao};