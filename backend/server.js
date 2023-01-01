// native imports
import path from 'path'
import {fileURLToPath} from 'url'
// external package imports
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
// local imports
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
// import routers
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()
connectDB()
const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(
  '/uploads',
  express.static(path.resolve(__dirname, '/uploads'))
)
app.use(express.static(path.resolve(__dirname, '../frontend/build')))

// mount routers
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

// app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

app.get('*', (req, res) =>
  res.sendFile(
    path.resolve(__dirname, '../frontend', 'build', 'index.html')
  )
)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`.yellow.bold)
)
