import style from "./Identificacao.module.css";
import PropTypes from "prop-types";
function Identficacao({nome, idade, cidade}){
    return(
        <p>Eu sou {nome}, tenho {idade}, e moro em {cidade}</p>
    )
    
}
Identficacao.propTypes = {
    nome: PropTypes.string,
    idade: PropTypes.number,
    cidade: PropTypes.string,
}

Identficacao.defaultProps = {
    nome: 'Nome Padrão',
    idade:0 ,
    cidade: 'Cidade Padrão',
}
export default Identficacao;
