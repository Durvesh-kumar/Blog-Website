const express = require('express');
const cors = require('cors');
const blogdatas = require('./data.json');

const app = express();

const port = 3044;
app.use(cors())
app.use(express.json())


app.get('/blogdatas', (req, res)=>{
    res.send(blogdatas)
});

// Singup

app.post("/singUp", (req, res)=>{
    const {name, email} = req.query;
    res.send(`Thank you for subscrib us ${name, email}`)
});

// Contect su


app.post("/message", (req, res)=>{
    const {email, name, message} = req.query;
    res.send(`Thank you for Contect us ${email, name} your message ${message}`)
})

// Login

app.post("/login", (req, res)=>{
    const {email, password} = req.query;
    res.send(`Welcome to my blog ${email}`)
})

app.get('/blogdatas/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const blogdata = blogdatas.filter(d => d.id === id);
    res.send(blogdata);
    
})



app.listen(port, ()=>{
    console.log(`Welcome to the ${port}`);
})
