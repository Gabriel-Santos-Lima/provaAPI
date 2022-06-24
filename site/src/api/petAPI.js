import axios from 'axios'

const api = axios.create ({
    baseURL: 'http://localhost:5000'
})

export async function cadastrar(pet){
    const x = await api.post ('/pet', {
        pet: pet
    })
    return x.data
}

export async function consultar(){
    const x = await api.get ('/pet', {

    })
    return x.data
}