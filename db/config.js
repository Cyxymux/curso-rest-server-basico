const mongoose = require('mongoose');

const dbConecction = async ()=>{
try {
    await mongoose.connect(process.env.MONGODB_CNN,{
        useUnifiedTopology: true
    });

    console.log('Conexión con la base de datos, establecida.');
} catch (error) {
    console.log(error);
    throw new Error('Error en la conexión a la base de datos.');
}
}

module.exports={
    dbConecction
}