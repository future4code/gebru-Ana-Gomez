import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
 display: flex;
 justify-content: space-between;
 margin: 10px;
 padding: 5px;
 border: 1px solid gray;
 width: 400px;
`

const UserListCard = styled.div`
 background-color: #baba;
 border: 1px solid black;
 padding: 10px;
 margin-top: 80px
`

class UserList extends React.Component {
state = {
    usersList: []
}
    componentDidMount(){
        this.getAllUsers()
    }


    getAllUsers = () =>{
        axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers:{
                Authorization: 'ana-gomez-gebru'
            }
            })
        .then(res => {
            this.setState({usersList: res.data})
        })
        .catch(err => console.log(err.response))
    }


    deleteUser = (userId) =>{
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
            headers:{
                Authorization: 'ana-gomez-gebru'
            }
        })
        .then(res =>{
            alert(`Usuário deletado com sucesso!`)
            this.getAllUsers()
        })
        .catch(err => console.log(err.response))
    }
    render () {
    
        const renderedUsersList = this.state.usersList.map((user) => {
            return (
              <Card key={user.id}>
               <span>{user.name}</span>
               <button onClick={() => this.deleteUser(user.id)}>Apagar</button>
              </Card>
            )
        })
        return (
            <UserListCard>
               <h3>Lista de Usuário</h3>
               {renderedUsersList}
               <hr />
               <button onClick={this.props.goToSignUp}>Ir para Tela de Cadastro</button>
            </UserListCard>
        )
    }
}

export default UserList