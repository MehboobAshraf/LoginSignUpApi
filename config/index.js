const config = {
    port: 9000,
    mongo: {
        uri: 'mongodb://localhost:27017/sample',
        options: {
        useNewUrlParser: true
        }
    },
    secrets : {
        session: 'user-app'
    }
};
  
module.exports = config;