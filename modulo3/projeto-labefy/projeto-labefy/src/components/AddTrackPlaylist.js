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

class AddTrackPlaylist extends React.Component{
    render (){
        return(
            <div>
                <CardPlaylist>
                   <h3>Adicionar novas músicas à Playlist</h3>
                </CardPlaylist>
            </div>
        )
    }
}

export default AddTrackPlaylist