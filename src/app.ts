import express, { Request, Response } from "express";
import dotenv = require("dotenv");
import ERL = require("express-rate-limit");
import Handlers = require("./middleware/errorMiddleware");
import DB = require("./config/db");
const port = process.env.PORT || 5000;

dotenv.config();

DB.connectDB();

const app = express();


const limiter = ERL.rateLimit({
	max: 5,
	windowMs:5 * 60 * 1000,
	message: "Too many request from this IP"
});

app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/covid", require("./routes/covidRoutes"));

app.use(Handlers.errorHandler);

app.get("/", (req: Request, res: Response) => {
	return res.send("Hello World");
});


app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
