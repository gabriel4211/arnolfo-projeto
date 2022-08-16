const { model } = require('mongoose');
var conexao = require('..//config/conexao');

var Email = conexao.Schema({
    email: {type:String}
})

module.exports = conexao.model("Email", Email)