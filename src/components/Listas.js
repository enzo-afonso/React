function Listas({jogadores}){
    return (
        <>
            <h3>Lista de Jogadores</h3>
            {jogadores.length > 0 ? (
                jogadores.map((jogador, index) =>(
                    <p key={index}>{jogador}</p>
                    ))) : (
                        <p>Não existem Jogadores</p>
                    )
                }
        </>
    )

}

export default Listas