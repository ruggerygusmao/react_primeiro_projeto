import React from "react";
import "./Login.css"

export default function Login(props){

    function mostrarMensagem(){
        alert("O nome do usuário e/ou senha está inválido.")
    }

    return(
        <div className="container">
            <form className="form">
                <div className="usuario">
                    <input type="text" name="username" placeholder="Nome do usuário" />
                </div>
                <div className="senha">
                    <input type="password" name="senha" placeholder="Senha" />
                </div>
                <button className="botao" onClick={()=>mostrarMensagem()}>Login</button>
                <p className="texto">Esqueceu a senha ? 
                    <a target="_blank" href="http://google.com">Clique aqui</a>
                </p>
                <p id="props">
                    {props.felicidade} {props.mensagem}
                </p>
            </form>
        </div>
    );
}
