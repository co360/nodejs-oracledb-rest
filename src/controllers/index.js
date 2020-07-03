const oracledb = require('oracledb');
const { handleDatabaseOperation, doRelease} = require('../services/database');


const getProdByCodprod = (request, response) =>{
  let codprod = parseInt(request.params.id);
  handleDatabaseOperation(request, response, (request, response, connection) =>{
    let select = 'query_here'
    connection.execute(select, [codprod], {
      outFormat: oracledb.OBJECT
    }, (err, result) => {
      if(err){
        response.json(err.message);
      }
      else{
        response.json(result.rows[0]);
      }
      doRelease(connection);
    });
  })
}

const getProdByCodAuxiliar = (request, response) =>{
  let codauxiliar = parseInt(request.params.id);
  handleDatabaseOperation(request, response, (request, response, connection) => {
    let select = 'query_here';
    connection.execute(select, [codauxiliar], {
      outFormat: oracledb.OBJECT
    }, (err, result) => {
      if(err){
        response.json(err.message);
      }
      else {
        response.json(result.rows[0]);
      }
      doRelease(connection);
    });
  });
}


module.exports = {
  getProdByCodprod,
  getProdByCodAuxiliar
}
