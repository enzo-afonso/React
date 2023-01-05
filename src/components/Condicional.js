import { useState } from "react";
function Condicional(){
    const [nome, setNome] = useState()
    const [nomeState, setNomeState] = useState()
    function enviarNome(event){
        event.preventDefault()
        setNomeState(nome)

        console.log(nome)


    }
    function limpar(event){
        event.preventDefault()
        setNomeState('')

        console.log(nome)


    }
    return(
        <div>
            <form action="">
                <input type="text" name = "nome" placeholder="Insira seu nome" 
                onChange={(event) => setNome(event.target.value)}/>
                <button type="submit"  onClick = {enviarNome}>Enviar</button>
                {nomeState && (
                    <div>
                        O nome inserido foi {nomeState}
                        <button onClick={limpar}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Condicional