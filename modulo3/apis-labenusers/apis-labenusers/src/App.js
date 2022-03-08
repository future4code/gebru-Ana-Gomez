import React from 'react';
import UserList from './components/UserList';
import SignUp from './components/SignUp';
import styled from 'styled-components';

const General = styled.div`
 display: flex; 
 justify-content: center;
 align-items: center;
 flex-direction: column;
`

class App extends React.Component {
state = {
  renderedScreen: 'signUp'
}

chooseScreen = () =>{
  switch (this.state.renderedScreen){
    case  'signUp':
      return <SignUp goToUserList={this.goToUserList}/>
    case 'userList':
      return <UserList goToSignUp={this.goToSignUp}/>
    default:
      return <h2>Página Não Encontrada</h2>
  }
}
goToSignUp = () =>{
  this.setState({renderedScreen: 'signUp'})
  }

goToUserList = () =>{
  this.setState({renderedScreen: 'userList'})
  }

  render() {
  return (
    <General>
      <h1>LabenUsers</h1>
      {this.chooseScreen()}
    </General>
  );
}
}
export default App;
