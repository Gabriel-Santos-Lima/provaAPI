import { con } from "../connection"

export async function Inserir(pet){
    const comando = `insert into tb_pet (nm_pet)
    values (?)`

    const [resposta] = await con.query(comando, pet)
    return resposta[0];
 
}


