import {Router} from 'express'

const router = Router()


router.get("/", (req, res) => {
    return res.json("deu certo paulista")
})


export {router}