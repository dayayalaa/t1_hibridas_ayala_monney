const userRouter = require('./userRouter');
const vuelosRouter = require('./vuelosRouter');

function routerAPI( app){
    app.use('/arcana/users', userRouter);
    app.use('/arcana/vuelos', vuelosRouter);
}

module.exports = routerAPI;