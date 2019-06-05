const argv = require('./config/yargs').argv;
const colors = require('colors');
const {crearArchivo,listartabla} = require('./multiplicar/mulplicar');

//let base ='5';


let argv2 = process.argv;

let comando =argv._[0];


switch(comando){
case'listar':
console.log('listar');
listartabla(argv.base,argv.limite)
.then(lista=>{
    console.log(lista);
})
break;

case 'crear':
    console.log('crear');
    crearArchivo(argv.base,argv.limite)
.then(archivo=>{
    console.log(archivo);
})
.then(err=>{
    console.log(err);
})
    break;
    default:
        console.log('comando no reconocido');
}


//let parametro= argv[2];

//let base = parametro.split('=')[1];
/*
console.log(base);


*/