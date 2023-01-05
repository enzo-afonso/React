function Click(){
    function clicou(){
        document.write("<h1>Out with the old, in with the new!</h1>");
    }
    return(
        <div>
            <p>Click no botão</p><button onClick={clicou}>Cliqui aqui</button>
        </div>
    )
}
export default Click