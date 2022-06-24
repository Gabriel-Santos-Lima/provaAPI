import { BrowserRouter, Routes, Route } from "react-router-dom"

import CadastrarPet  from "./pages/cadastrarPet"


export default function SiteRoutes(){
    return(
        <BrowserRouter>
         <Routes>
                <Route path='/cadastrarPet' element = { < CadastrarPet /> }/>
         </Routes>
        </BrowserRouter>
    )
}