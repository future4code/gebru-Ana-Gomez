import React from 'react';
import styled from 'styled-components';
import AddTrackPlaylist from './components/AddTrackPlaylist';
import CreatePlaylist from './components/CreatePlaylist';
import DetailsPlaylist from './components/DetailsPlaylist';


const GeneralDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position:absolute;
top:0;
left:0;
bottom: 0;
z-index:11;
background-color:#e28743;
width:100%;
height:100%;
opacity: .70;
filter: alpha(opacity=65);
scroll-behavior: smooth;

&&:target{
  scroll-margin-top: .8em;
}
`

const FontStyled = styled.h1`
 font-size: 30px;
 font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 padding: 10px;

 &&:hover{
   background-color: #eab676;
   transition: 1s;
   padding: 20px;
 }
`

class App extends React.Component {
  render() {
    return (
      <GeneralDiv>
      
        <FontStyled><u>Bem vinde ao Labefy!</u></FontStyled>

        <br />
        <CreatePlaylist />

        <br />

        <DetailsPlaylist />

        <br />

        <AddTrackPlaylist />

      </GeneralDiv>
    );
  }
  
}

export default App;
