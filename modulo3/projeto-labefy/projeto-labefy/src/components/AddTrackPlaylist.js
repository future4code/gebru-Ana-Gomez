import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

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

class AddTrackPlaylist extends React.Component{
state = {
    playlistId: '',
    musicAuthor: '',
    musicName: '',
    urlMusic: '',
}

// Input Controlado //

handlePlaylistId = (event) =>{
    this.setState({playlistId: event.target.value})
}

handleMusicAuthor = (event) =>{
    this.setState({musicAuthor: event.target.value})
}

handleMusicName = (event) =>{
    this.setState({musicName: event.target.value})
}

handleUrlMusic = (event) =>{
    this.setState({urlMusic: event.target.value})
}

// Requisição da API //

addTrackToPlaylist = (playlistId) =>{

const body = {
    name: this.state.musicName,
    artist: this.state.musicAuthor,
    url: this.state.urlMusic
}
    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, body,{
        headers:{
            Authorization: 'ana-gomez-gebru'
        }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err.response))
}
    render (){
        return(
            <div>
                <CardPlaylist>
                   <h3>Adicionar novas músicas à Playlist</h3>
                   <input 
                   placeholder='Nome da Playlist'
                   value={this.state.playlistId}
                   onChange={this.handlePlaylistId}
                   />
                   <input 
                   placeholder='Nome da banda/cantor(a)'
                   value={this.state.musicAuthor}
                   onChange={this.handleMusicAuthor}
                   />
                   <input 
                   placeholder='Nome da música'
                   value={this.state.musicName}
                   onChange={this.handleMusicName}
                   />
                   <input 
                   placeholder='Link da música'
                   value={this.state.urlMusic}
                   onChange={this.handleUrlMusic} 
                   />
                   <Button onClick={this.addTrackToPlaylist}>Adicionar Música</Button>
                </CardPlaylist>
            </div>
        )
    }
}

export default AddTrackPlaylist