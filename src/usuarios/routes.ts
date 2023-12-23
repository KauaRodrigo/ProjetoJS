import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    //only used by adimin
    res.send('Return all users')
})

router.post('/', (req, res) => {
    const body = req.body
    res.send(body)
})

router.get('/:id', (req, res) => {    
    const id = req.params.id 
    res.send('User ' + id)
})

router.patch('/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    res.send('Updating user ' + id + ' with data\n ' + JSON.stringify(body))
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.send('Deleting user ' + id)
})

export default router