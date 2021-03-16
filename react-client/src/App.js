import Navbar from './components/common/navbar';
import Main from './components/homepage/main-container'; 
import 'bootstrap/dist/css/bootstrap.css';
import BoardContainer from './components/homepage/user-gameboard';
function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <BoardContainer/> 
    </div>
  )
}

export default App;
