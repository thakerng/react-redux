"use strict";

const express = require('express');
const PORT = process.env.PORT || '3001';
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
let app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next)=> {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

let todoState = {
  counter: 0,
  todos: []
};

app.post('/api/todo/add', (req, res)=> {
  todoState.todos.push({
    id: ++todoState.counter,
    title: req.body.title,
    isDone: false
  });
  console.log(req.body);
  res.send({success: true});
});

app.post('/api/todo/archive', (req, res)=> {
  for (let index in todoState.todos) {
    if (todoState.todos[index].id == req.body.id)
      todoState.todos.splice(index, 1);
  }
  console.log(req.body);
  res.send({success: true});
});

app.post('/api/todo/toggle', (req, res)=> {
  for (let index in todoState.todos) {
    if (todoState.todos[index].id == req.body.id)
      todoState.todos[index].isDone = !todoState.todos[index].isDone;
  }
  console.log(req.body);
  res.send({success: true});
});

app.get('/api/todo/all', (req, res)=> {
  res.send({success: true, state: todoState});
});

app.listen(PORT, ()=> {
  console.log(`Listening ${PORT} ....`);
});