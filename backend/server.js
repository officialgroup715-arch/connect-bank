import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRouter from "./router/auth.js"
import cors from "cors"

const app = express()
dotenv.config()
console.log(process.env.CLIENT_URL);
app.use(cors({
  origin: [process.env.CLIENT_URL, "http://localhost:5173"],
   methods: ["GET", "POST", "PUT", "DELETE"],
   allowedHeaders: ["Content-Type", "Authorization"]

}))

const PORT = process.env.PORT || 8000
app.get("/", (req, res) => {
  res.send("Backend running successfully")
})


app.use(express.json());

app.use("/api/users", userRouter)
connectDB()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})