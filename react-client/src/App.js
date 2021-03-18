import Navbar from './components/common/navbar';
import Main from './components/homepage/main-container'; 
import 'bootstrap/dist/css/bootstrap.css';
import BoardContainer from './components/homepage/user-gameboard';
import { Component } from 'react'; 
import LoginPopup from './components/popup/login';
function App() {
  return (
      
    <div>  
      
      <LoginPopup></LoginPopup>
      <Navbar />
      <Main />
      <BoardContainer/>   
    </div>
  )
}

export default App;
