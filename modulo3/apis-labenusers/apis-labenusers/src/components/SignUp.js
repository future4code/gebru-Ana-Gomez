import React from "react";
import axios from 'axios';
import styled from 'styled-components';

const SignUpCard = styled.div`
 background-color: #baba;
 border: 1px solid black;
 padding: 10px;
 margin-top: 80px;
`

<<<<<<< HEAD


=======
>>>>>>> 8498f6b7918500eca99cadf7043d572868355393
class SignUp extends React.Component {
state = {
    nameInput: '',
    emailInput: '',
}

handleNameInput = (event) =>{
    this.setState({nameInput: event.target.value})
}

handleEmailInput = (event) =>{
    this.setState({emailInput: event.target.value})
}

createUser = () =>{
    const body = {
        name: this.state.nameInput,
        email: this.state.emailInput
    }
    axios 
     .post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
         headers: {
             Authorization: 'ana-gomez-gebru'
         }
     })
     .then(res => 
        {alert(`Usuário ${this.state.nameInput} cadastrado com sucesso!`)
        this.setState({nameInput:'', emailInput:''})
        })
     .catch(err => alert(`ERRO! Já existe um usuário com esse nome e/ou email`))
}
    render () {
        return(
            <SignUpCard>
                <h3>Tela de Cadastro</h3>
                <div>
                    <input 
                    placeholder="Nome" 
                    value={this.state.nameInput} 
                    onChange={this.handleNameInput}/>

                    <input 
                    placeholder="E-mail" 
                    value={this.state.emailInput} 
                    onChange={this.handleEmailInput} />
                    <button onClick={this.createUser}>Cadastrar</button>
                </div>
                <hr />
                <button onClick={this.props.goToUserList}>Ir para Lista de Usuário</button>
              
            </SignUpCard>
        )
    }
}

export default SignUp