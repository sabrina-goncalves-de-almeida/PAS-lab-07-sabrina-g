import Botao from './Botao.tsx';
import CaixaDeTexto from './CaixaDeTexto.tsx';
import Senha from './Senha.tsx';

function Formulario(props){
    return (
        <>
            <CaixaDeTexto nomeDaLabel="Nome: " tipo="text" placeHolder="Primeiro Nome" />
            <CaixaDeTexto nomeDaLabel="Sobrenome: " tipo="text" placeHolder="Sobrenome" />
            <CaixaDeTexto nomeDaLabel="Email: " tipo="email" placeHolder="email@gmail.com.br" />
            <Senha nomeDaLabel="Senha: "  placeHolder="Digite sua senha" />
            <Botao texto="Enviar" textoDoAlert="Dados enviados!" />
            <Botao texto="Cancelar" textoDoAlert="Envio cancelado!" />            
        </>
    );
}

export default Formulario;
