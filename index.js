// const mod1 = require('./modulos/modulo')
// const mod2 = require('./modulos/modulo2')

// mod1('meu primeiro módulo Node.js') //módulo genérico com só 1 função
// mod2.imprimirMensagem('meu segundo módulo Node.js') //módulo com mais de uma função

//Desestruturação
//Módulo com várias funções desestruturado, trazendo somente funções que o desenvolvedor deseja
const {imprimirMensagem} = require('./modulos/modulo2')

imprimirMensagem('meu segundo módulo Node.js')