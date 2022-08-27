import express, { Request, Response } from "express";
import dotenv = require("dotenv");
import Handlers = require("./middleware/errorMiddleware");
import DB = require("./config/db");
const port = process.env.PORT || 5000;

dotenv.config();

DB.connectDB();

const app = express();

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
