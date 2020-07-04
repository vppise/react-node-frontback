const express = require ('express');
const connectDB = require('./config/db');

const app =  express();

// connect database
connectDB();

//  int middleware

app.use(express.json({extended: false}))

app.get('/', (req, res) => res.send('api running'));

//  Set routes

app.use('/api/student', require('./routes/api/student'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`))