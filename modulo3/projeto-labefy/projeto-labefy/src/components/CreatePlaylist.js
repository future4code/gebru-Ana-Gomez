import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Estilização do Componente //
const CardPlaylist = styled.div`
 background-color: #eab676;
 border: 2px solid black;
 border-radius: 15px;
 padding: 15px;
 display: flex;
 align-items: center;
 flex-direction: column;
 margin: 10px;
 width: 500px;
 position: static;
`
const Button = styled.button`
 margin-top: 10px;
 text-decoration: none;
`


class CreatePlaylist extends React.Component {
state = {
    namePlaylist: ''
}

// Input Controlado //
handleNamePlaylist = (event) =>{
    this.setState({namePlaylist: event.target.value})
}

// Requisição da API //
createPlaylists = () =>{
const body = {
    name: this.state.namePlaylist
}
    axios
    .post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
        headers: {
            Authorization: 'ana-gomez-gebru'
        }
    })
    .then(res => {
        alert(`Playlist ${this.state.namePlaylist} criada com sucesso!`)
        this.setState({namePlaylist:''})

    })
    .catch(err => alert('Já existe uma playlist com esse nome'))
}
    render (){
        return(
            <div>
                <CardPlaylist>
                   <h3>Criar Playlists</h3>
                   <input 
                   placeholder='Nome da Playlist' 
                   value={this.state.namePlaylist}
                   onChange={this.handleNamePlaylist}
                   />
                   <Button onClick={this.createPlaylists}>Criar</Button>
                </CardPlaylist>
            </div>
        )
    }
}

export default CreatePlaylist