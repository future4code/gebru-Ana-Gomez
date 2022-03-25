import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ForumIcon from '@material-ui/icons/Forum';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

const NavHeader = styled.header`
 display: flex;
 justify-content: space-around;
 padding: 20px;
 height: 40px;
 object-fit: contain;
 border-bottom: 1px solid #f9f9f9;
`
const BrandName = styled.p`
 display: flex;
 color: salmon;
 justify-content: center;
 margin-top: 20px;
 font-weight: bold;
 font-size: 20px;
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 border-bottom: 1px solid #f9f9f9;

`

function Header (){
    return (
        <>
         <BrandName>Astromatch</BrandName>
         <NavHeader>
            <IconButton>
              <PersonIcon />
            </IconButton>

             <IconButton>
              <WhatshotIcon />
             </IconButton>

            <IconButton>
              <ForumIcon />  
            </IconButton> 
         </NavHeader>
        
        </>
    )
}

export default Header;