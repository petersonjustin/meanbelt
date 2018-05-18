const   express = require('express'),
        path = require('path'),
        mongoose = require('mongoose'),
        app = express(),
        bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, `../client/dist/client`)));

require(`./../server/config/mongoose.js`)(app);

require(`./../server/config/routes.js`)(app);

app.listen(8000, function(){
    console.log("Check me out on 8000");
})