const userRouter = require('./userRouter');
const vuelosRouter = require('./vuelosRouter');
const reservasRouter = require('./reservasRouter');

function routerAPI( app){
    app.use('/arcana/users', userRouter);
    app.use('/arcana/vuelos', vuelosRouter);
    app.use('/arcana/reservas',reservasRouter);
}

module.exports = routerAPI;