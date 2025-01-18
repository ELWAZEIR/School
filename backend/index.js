import express, { json } from "express"
import cors from "cors"
import { connect } from "mongoose"
import { config } from "dotenv"
// const bodyParser = require("body-parser")
const app = express()
import Routes from "./routes/route.js"

const PORT = process.env.PORT || 5000

config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(json({ limit: '10mb' }))
app.use(cors())

const url = `mongodb+srv://school:school123@school.kdc3v.mongodb.net/?retryWrites=true&w=majority&appName=School`
// const url=`mongodb://localhost:27017/school`

// Connect to MongoDB
connect(url)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("NOT CONNECTED TO NETWORK", err));
app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})