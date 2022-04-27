const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my own over smarty smarty pant!')
  });

const users = [
    {id: 1, name: 'joshim', email: 'shahshaha@gmail.com', phone: '0167878788'},
    {id: 2, name: 'moshim', email: 'shahshaha@gmail.com', phone: '0167878788'},
    {id: 3, name: 'kashem', email: 'shahshaha@gmail.com', phone: '0167878788'},
    {id: 4, name: 'hakko', email: 'shahshaha@gmail.com', phone: '0167878788'},
    {id: 5, name: 'makko', email: 'shahshaha@gmail.com', phone: '0167878788'},
    {id: 6, name: 'nakko', email: 'shahshaha@gmail.com', phone: '0167878788'},
    {id: 7, name: 'chakko', email: 'shahshaha@gmail.com', phone: '0167878788'},
]

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.post('/user', (req,res) => {
    console.log('request',req.body);
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

  app.listen(port, () => {
    console.log('listening to port', port)
  });