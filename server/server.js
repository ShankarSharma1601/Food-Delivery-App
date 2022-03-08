const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/config')

//coonfig dotenv
dotenv.config()

//connection mongodb
connectDB();


const app = express()

//middleware
app.use(express.json())
app.use(morgan('dev'))


//route
app.use('/api/pizzas', require("./routes/pizzaRoute"));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoute'))
app.get('/', (req,res)=>{
    res.send('hello')
})

const port = process.env.PORT || 8080;
app.listen(port, () =>{
    console.log(`server is running on port at ${process.env.NODE_ENV} mode on port no ${process.env.PORT}.`)
})




//npm run server