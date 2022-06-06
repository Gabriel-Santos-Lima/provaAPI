import { Router } from 'express'
import { Inserir } from '../repository/petRepository.js'

const server = Router();


server.post('/pet', async (req, resp) => {
    try {
        const novoPet = req.body;

        const x = await Inserir(novoPet)

        resp.send(x)
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server