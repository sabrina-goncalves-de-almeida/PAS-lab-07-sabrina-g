import styles from "../styles/CaixaDeTexto.module.css";

function Senha(props){
    return (
        <>
            <br/>
            <label className={styles.textoDaLabel} htmlFor="">{props.nomeDaLabel}</label>
            <br/>
            <input className={styles.inputDoForm}  placeholder={props.placeHolder} type="password" />
            <br/>
        </>
    );
}

export default Senha;
