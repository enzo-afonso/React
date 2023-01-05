import { useState } from "react"
function Form(){
    const [nome, setName] = useState();
    const [idade, setIdade] = useState();
    function cadastrarUsuario(e){
        e.preventDefault()
        
        console.log(nome, idade);

    }
    return(
        <div>
            <form onSubmit={cadastrarUsuario} >
                <div>
                    <label htmlFor="">Nome</label>
                    <input type="text" name="nome"
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">idade</label>
                    <input type="number" name="idade"
                    onChange={(e) => setIdade(e.target.value)}
                    
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
                
            </form>
        </div>
    )
}

export default Form