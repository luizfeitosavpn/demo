const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

let todos = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/add', (req, res) => {
  const task = req.body.task;
  if (task) todos.push(task);
  res.redirect('/');
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`To-do app listening at http://localhost:${port}`);
});
