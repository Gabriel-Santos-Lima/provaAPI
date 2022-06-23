import { Router } from 'express'
import { Inserir, listar } from '../repository/petRepository.js';

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

server.get('/pet', async (req, resp) => {
    try{
        const resposta = await listar();
        resp.send(resposta);
    } catch ( err ) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server