import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./src/routers/ServiceRouter.js"
import mongoose from "mongoose"

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
dotenv.config()

const port = process.env.PORT
const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(url)
    .then(resp => {
        console.log("Connect");
    }).catch(err => {
        console.log("Not Connect");
    })

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})