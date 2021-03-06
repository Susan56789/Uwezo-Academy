function requireHTTPS(req,res, next){
    //The x-forwarded-proto check is for Heroku
    if(!req.secure && req.get('x-forwarded-proto') !=='https'){
        return res.redirect('https://' + req.get('host')  + req.url);
    }
    next();
}

const express = require ('express');
const app = express();
const path = require('path');

//app.use(requireHTTPS);

app.use(express.static(__dirname + '/dist/Uwezo-Academy/browser'));


app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/Uwezo-Academy/browser/index.html'));
});

const PORT= 8080;
app.listen(process.env.PORT || 8080,
    
    console.log(`Server is started and listening on port: ${PORT}`)
    )
