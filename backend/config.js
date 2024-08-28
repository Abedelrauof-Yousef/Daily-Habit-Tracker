const mongoose = require('mongoose');

// Connect to MongoDB
const db_connection = () => {

    mongoose.connect('mongodb+srv://abedelrauofyousef:AdminAbed000@cluster0.epv3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        useNewUrlParser: true,  
        useUnifiedTopology: true,
    })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
}


module.exports = db_connection();

