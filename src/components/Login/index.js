import React, { Component } from 'react';
import './style.css'
import { MdLock, MdSend } from "react-icons/md";

// console.log( `Usuário :  ${sessionStorage.getItem('bookSistemUSer')}`);

export default class Login extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.target);
        const user = data.get('user');
        const userPass = data.get('userPass');
        
        if(user === 'admin' && userPass === 'Oliver@132'){
            sessionStorage.setItem('bookSistemUSer', true);
            window.location.href = '/'
        } else {
            sessionStorage.setItem('bookSistemUSer', false);
            alert('Usuário ou senha inválido')
            
        }

        

        // fetch('/api/form-submit-url', {
        //     method: 'POST',
        //     body: data,
        // });
    }
    render() {
        return (
            <div className='login'>
                <form className="login__container" onSubmit={this.handleSubmit}>
                    <div className="login__lock-container">
                        <MdLock className="login__lock-icon" />
                    </div>

                    <input type="text" name="user" className="login__data" placeholder="Usuário" required />
                    <input type="password" name="userPass" className="login__data" placeholder="Senha" required />

                    <button className="login__post-buttom">Enviar <MdSend className="login__post-icon" /></button>
                </form>
            </div>
        );
    }
}