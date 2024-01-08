import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
//import Header from './Header';
import Exchanges from './component/Exchange';
import Coins from './component/Coins';
import CoinDetail from './component/CoinDetail';
import Register from './Login/Register'
import Login from './Login/Login';
function App() {
  return (
<Router>
<div className='App'>
  <Routes>
  <Route exact path='/' element={<Exchanges/>}/>
  <Route exact path='/coins' element={<Coins/>}/>
  <Route exact path='coins/:id' element={<CoinDetail/>}/>
  <Route exact path='register' element={<Register/>}/>
  <Route exact path='login' element={<Login/>}/>





  </Routes>

</div>
</Router>
    
  );
}

export default App;
