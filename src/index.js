module.exports = (server) =>{
    server.use('/question', require('./routes/question'));
};