import Navbar from './components/common/navbar';
import Main from './components/homepage/main-container'; 
import 'bootstrap/dist/css/bootstrap.css';
import RecruitContainer from './components/homepage/recruit-container';
import { Component } from 'react'; 
import LoginPopup from './components/popup/login';
function App() {
  return (
      
    <div>  
      
      {/* <LoginPopup></LoginPopup> */}
      <Navbar />
      <Main />
      <RecruitContainer/>   
    </div>
  )
}

export default App;
