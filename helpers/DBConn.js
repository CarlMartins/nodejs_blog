const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI || 'mongodb+srv://UserTest:17jYYpxz2o23xWVT@cluster0.e14xc.mongodb.net/Studies?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() =>
    {
        console.log("Connection successfull to MongoDb");
    }).catch((err) =>
    {
        console.log(`Connection failed - Error: ${err}`);
    })