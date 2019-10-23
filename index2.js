var request = require('request');
request('http://viacep.com.br/ws/29780000/json',function(error, response, body) {
    var parsedCEP = JSON.parse(body);
    console.log(parsedCEP.localidade+" - "+parsedCEP.uf);
}
);