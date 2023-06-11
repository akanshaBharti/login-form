import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Input from './components/Input';  
import InputLogin from './components/InputLogin';
import InputNext from './components/InputNext';

function App() {
  return (  
    <Router>
      <div>  
      <Navbar/>
      
      <Routes>
       <Route exact path='/' element={<Input/>}/>
        <Route exact path='/Signup' element={<Input/>}/>
        <Route exact path='/InputLogin' element={<InputLogin/>}/>
        <Route exact path='/InputNext' element={<InputNext/>}/>

        
      </Routes>
      </div>
    </Router>
  ); 
}

export default App;
