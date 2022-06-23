import { con } from "./connection.js"

export async function Inserir(pet){
    const comando = `insert into tb_pet (nm_pet)
    values (?)`

    const [resposta] = await con.query(comando, [pet.pet])
    return pet;
 
}

export async function listar(){
    const comando = 
    `select id_pet    id,
            nm_pet     nome
    from    tb_pet`

    const [linhas] = await con.query(comando);
    return linhas;
}

