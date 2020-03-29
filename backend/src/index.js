const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate')
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.listen(3333);


/**
 * Get buscar informação do Backend
 * POST criar informação no Backend
 * PUT alterar uma informação no Backend
 * DELETE deletar uma informação no Backend
 */
/**
 * Tipos de parametros 
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Utilizados para identificar recursos
 * Request Body: corpo da requisição, utilizados para criar ou alterar recursos.
 */

  
