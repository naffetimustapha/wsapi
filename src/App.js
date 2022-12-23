import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Users from './Pages/Users'
import Admin from './Pages/Admin'
import Errors from './Pages/Errors';
import Profile from './Pages/Profile'
import NavBar from './Components/NavBar';
function App() {
  return (
    <div className="App">
      
        <NavBar/>
       
        
           <h1 className='adc'>WS-API</h1>
        <Routes >
<Route path ='/' element= {<Home/>}/>
  <Route path='/users' element = {<Users/>}/>
  <Route path='/user/:id' element = {<Profile/>}/>
  <Route path='Profile' element = {<Profile/>}/>
  <Route path='Admin' element = {<Admin/>}/>
  <Route path='/*' element = {<Errors/>}/>
        </Routes>
    
    </div>
  );
}

export default App;
