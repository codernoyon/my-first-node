const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())

app.get('/', (req, res) =>{
    res.send("Node mon is amazing!!")
});

const users = [
    {id: 1, name: "Noyon Rahman", email: "noyon@gmail.com", phone: '01706592962'},
    {id: 2, name: "nadim", email: "nadim@gmail.com", phone: '01706592962'},
    {id: 3, name: "shakil", email: "shakil@gmail.com", phone: '01706592962'},
    {id: 4, name: "mahfuj", email: "mahfuj@gmail.com", phone: '01706592962'},
    {id: 5, name: "asraf", email: "asraf@gmail.com", phone: '01706592962'},
    {id: 6, name: "mridul", email: "mridul@gmail.com", phone: '01706592962'},
    {id: 7, name: "asif", email: "asif@gmail.com", phone: '01706592962'},
]

app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const  matched = users.filter(u => u.name.toLowerCase().includes(search));
        res.send(matched)
    }else{
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});


app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
});


app.listen(port, () =>{
    console.log("Listining to port", port);
});
