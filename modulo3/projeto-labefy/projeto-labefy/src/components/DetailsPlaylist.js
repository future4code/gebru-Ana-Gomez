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
`
const List = styled.div`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 padding: 5px;
 margin: 10px;
 border: 1px solid black;
 border-radius: 10px;
 font-size: 16px;
 font-weight: bold;
 width: 200px;
 position: static;

 &&:hover{
     background-color: #e28743;
     transition: 1s;
 }
`
const DeleteButton = styled.button`
 display: flex;
 align-items: center;
 width: auto;
 height: 30px;
 text-decoration: none;
`


class DetailsPlaylist extends React.Component{
state = {
    userPlaylists: []
}

componentDidMount(){
    this.getAllPlaylists()
}


// Requisição da API //
getAllPlaylists = () =>{
    axios
    .get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
        headers: {
            Authorization: 'ana-gomez-gebru'
        }
    })
    .then(res => this.setState({userPlaylists: res.data.result.list}))

    .catch(err => console.log(err.response))
}



deletePlaylist = (playlistId) =>{
    axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
        headers: {
            Authorization: 'ana-gomez-gebru'
        }
    })
    .then(res => {
        alert('Playlist apagada com sucesso!')
        this.getAllPlaylists()
    })
    .catch(err => console.log(err.response))
}
    render (){
      const renderedPlaylist = this.state.userPlaylists.map((playlist) =>{
          return <List key={playlist.id}>
                   <p>{playlist.name}</p>
                   <DeleteButton onClick={() => this.deletePlaylist(playlist.id)}>Apagar</DeleteButton>
                  </List>
      })
        return (
                <CardPlaylist>
                  <h3>Lista de Playlists Criadas</h3>
                  {renderedPlaylist}
                </CardPlaylist>
        )
    }
}

export default DetailsPlaylist