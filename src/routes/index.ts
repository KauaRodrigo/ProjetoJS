import express from 'express'

export const UserRouter = express.Router()

UserRouter.get('/', (_, res) => {
    res.send('Users')
})

export const ProductRouter = express.Router()

ProductRouter.get('/', (_, res) => {
    res.send('Products')
})

