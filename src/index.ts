import express, { urlencoded } from 'express'
import UserRoutes from './usuarios/routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', UserRoutes)

app.listen(3000, () => {
    console.log('is running')
})

