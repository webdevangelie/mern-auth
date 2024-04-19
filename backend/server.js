import express from 'express'
import dotenv from 'dotenv'
const port = process.env.PORT || 3000
import userRoutes from './routes/userRoutes.js'

const app = express()

app.use('/api/users', userRoutes)

app.get('/', (req,res) => res.send('Server is ready.'))

app.listen(port, () => console.log(`Server has started at port ${port}`))