import styles from "../styles/CaixaDeTexto.module.css";

function CaixaDeTexto(props){
    return (
        <>
            <br/>
            <label className={styles.textoDaLabel} htmlFor="">{props.nomeDaLabel}</label>
            <br/>
            <input className={styles.inputDoForm} type={props.tipo} placeholder={props.placeHolder} />
            <br/>
        </>
    );
}

export default CaixaDeTexto;
