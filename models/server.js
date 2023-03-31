const express = require('express');
const cors = require('cors');
const {dbConecction} = require('../db/config');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Conectar a la base de datos
        this.conectarDb();

        //Middleware
        this.middlewares();
        //Rutas
        this.routes();
    }

    async conectarDb(){
        await dbConecction();
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //Parseo y lectura del body

        this.app.use(express.json());

        //Directorio Público
        this.app.use(express.static('public'));
    }
    routes(){
       this.app.use(this.usuariosPath, require('../routes/user') );
    }

    listen(){

        this.app.listen(this.port,()=>{
            console.log(`Corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;