const fs = require('fs');
const colors = require('colors');
let listartabla=(base,limite)=>{

    return new Promise((resolve, reject)=>{

        if(!Number(base) && !Number(limite)){
            reject('No son numeros');
        }
        let data ="";
          
        for(let i=1; i<=limite; i++){

            let resultado = i*base;

            data+=`${i} X ${base} = ${resultado}\n`;
        }
       
        resolve(data.green);

    })


}




let crearArchivo =(base,limite=10)=>{


    return new Promise((resolve, reject)=>{
    
        if(!Number(base)){
            reject('no es un numero');
            return;
        }


        let data = '';

        for(i =1; i<=limite; i++){
        
            let resultado;
        
            resultado = i * base;
        
            data+=`${i} X ${base} = ${resultado}\n`;
        
        }
        
        fs.writeFile('tabla/tabla-2.txt',data,(err)=>{
            if(err){
              reject(err);
            }else{
              resolve(`El archivo fue creado`.green);
            }
            
            
        })

        
    })
}


module.exports={
    crearArchivo,
    listartabla
}




