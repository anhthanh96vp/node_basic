const express = require('express');
const multer = require('multer');
const app = express();

// diskStorage cần 2 thuộc tính là destination và filename
const storage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, '.')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

// Thằng multer được truyền vào storage bằng với storage bên trên
const upload = multer({storage: storage}).single('myfile');

app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/index.html");
});

app.post('/upload', (req, res)=>{
    upload(req, res), (err)=>{
        if(err){return res.end('Error')}
        
        res.end('Upload file finish')
    }
})