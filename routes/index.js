const userRouter = require('./userRouter');
const vuelosRouter = require('./vuelosRouter');

function routerAPI( app){
    // Definimos los endPoints
    app.use('/api/users', userRouter);
    app.use('/api/vuelos', vuelosRouter);
}

module.exports = routerAPI;