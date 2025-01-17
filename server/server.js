import express from 'express'
import { configDotenv } from 'dotenv'
import cors from 'cors'
import { connectDB } from './config.js'
import { authRoute } from './routes/auth.route.js'

configDotenv()
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoute)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server Running On PORT: ${PORT}`)
    connectDB()
})