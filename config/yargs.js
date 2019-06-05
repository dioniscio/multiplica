const opts ={
    base:{
        demand:true,
        alias:'b'
    },
    limite:{
        alias:'l',
        default:10
    }


}

const argv = require('yargs')
                     .command('listar','Imprimeen consola la tbala de multiplicar',{
                        opts
                     })
                     .help()
                     .argv;





module.exports={
    argv
}