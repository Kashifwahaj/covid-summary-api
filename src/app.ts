import express, { Request, Response } from 'express'
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const { connectDB } = require('./config/db');
const port = process.env.PORT || 5000;


connectDB();

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/covid', require('./routes/covidRoutes'));

app.use(errorHandler)

app.get('/', (req: Request, res: Response) => {
    return res.send('Hello World');
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
