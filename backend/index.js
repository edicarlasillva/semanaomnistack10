const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb+srv://edicarlasillva:Carlinha123@cluster0-7rpb4.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());

// Métodos HTTP: GET -> listar, POST -> cadastrar, PUT -> atualizar, DELETE -> deletar

// Tipos de parâmetros:
// Query Params: request.query (filtros, ordenação, paginação, ...) -> GET
// Route Params: request.params (identificar um recurso  na alteração ou remoção) -> PUT ou DELETE
// Body: request.body (dados para criação ou alteração de um registro) -> POST ou PUT

// MongoDB (banco não relacional)

app.post('/users', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'Hello Omnistack' });
});

app.listen(3333);
