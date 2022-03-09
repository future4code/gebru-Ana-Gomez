import React from 'react';
import SignUp from './components/SignUp';
import UserList from './components/UserList';


class App extends React.Component {
  state = {
    renderedScreen: 'signUp'
  }

  chooseScreen = () =>{
    switch(this.state.renderedScreen){
      case 'signUp':
        return <SignUp goToUserList={this.goToUserList}/>
      case 'usersList':
        return <UserList goToSignUp={this.goToSignUp}/>
      default:
        return <h2>Página Não Encontrada</h2>
    }

    goToSignUp = () =>{
      this.setState({renderedScreen: 'signUp'})
    }

    goToUserList = () =>{
      this.setState({renderedScreen: 'usersList'})
    }
  }
  render(){

  return (
    <div>
      {this.chooseScreen}
    </div>
  )
}
}


export default App;
