const path = require('path');

const express = require('express');

const app = express();

app.use(express.static(__dirname + "/dist/breaking-bad-frontend"));

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, 'dist/breaking-bad-frontend', 'index.html'));
});

app.listen({
    port: process.env.PORT || 8282
},() =>{
    console.log('Servidor inciado http:localhost:8282');
}
);

