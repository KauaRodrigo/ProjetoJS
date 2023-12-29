import express from 'express'
import { UserRouter, ProductRouter } from './routes/index'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello coder")
})

app.use('/users', UserRouter)
app.use('/products', ProductRouter)

app.listen(3000, () => {
    console.log('is running')
})

