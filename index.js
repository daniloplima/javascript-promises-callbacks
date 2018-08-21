const util = require('util');
const fs = require('fs');
const giphy = require('giphy-api')('3aAQMHFPJphL7iL5qBIunCL1PXqbcQ3j');
const GphApiClient = require('giphy-js-sdk-core')
client = GphApiClient("3aAQMHFPJphL7iL5qBIunCL1PXqbcQ3j")

function buscaGIF (callback){
giphy.search({q: 'pokemon', rating: 'g', limit: '1'}, function (err, res) {
    return callback(err, res)
    });
}

function buscaGIFComPromise (){
    return new Promise((resolve, reject) => {
        giphy.search({q: 'pokemon', rating: 'g', limit: '1'}, (error,resultado) =>{
            return error ? reject(error): resolve(resultado)
        })
    })
}
/*
;(async() => {
    try {
        const busca = await buscaGIFComPromise();
        console.log(busca)
        return await buscaGIFComPromise();  
    }
    catch(error){
        console.error('deu ruim', error)
        return null
    }

})()


buscaGIFComPromise()
.then(sucesso =>{
    console.log(sucesso);
})
.catch(err => {
    console.err('não funcionou', err);
})
*/

module.exports = {
    buscaGIF : buscaGIF,
    buscaGIFComPromise : buscaGIFComPromise
}
