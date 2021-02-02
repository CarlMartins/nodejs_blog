const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI,
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