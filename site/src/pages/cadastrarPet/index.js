
import { useState } from "react";
import { cadastrar, consultar } from "../../api/petAPI";

export default function Index(){

    const [pet, setPet] = useState ('')


    async function SalvarClick(){
        const resposta = await cadastrar(pet)

        alert("Pet Cadastrado!!")
        return resposta

    }

    async function consultarPet(){
        const resposta = await consultar()
        return resposta
    }

    return (
        <main>
            <div>
                Cadastrar Pet
            </div>
            <div>
                Pet: <input type='text' value={pet} onChange = {e => setPet (e.target.value)} />
            </div>

            <div>
                <button onClick={SalvarClick}> Cadastar </button>
            </div>


            <div>
                Consultar Pets
            </div>

            <div>
                <button onClick={consultarPet}> Consultar </button>
            </div>
        
            <div>
            
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            
            </div>

        </main>
        
    )
}