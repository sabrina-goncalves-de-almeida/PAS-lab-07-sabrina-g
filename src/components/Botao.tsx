import styles from "../styles/Botao.module.css";

function Botao(props){
    const alertaDoBotao = () => {
        alert(props.textoDoAlert);
    };
    return <button className={styles.btnRapido} onClick={alertaDoBotao}>{props.texto}</button>;
}

export default Botao;
