var express = require('express');
var cors = require('cors');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(cors());

app.get('*', function(request, response, next) {
 response.sendFile('index.html');
});

app.listen(process.env.PORT || 3000);
