// login page
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import login from './login.png'
import './Input.css'

class InputLogin extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email_MobileNumber: '',
         password:'',
      }  
    }

    handleEPChange=(event)=>{
        this.setState({
          email_MobileNumber: event.target.value
        })
    }

    handlePasswordChange=(event)=>{
        this.setState({  
            password: event.target.value  
        })
    }
    
  render() {
    return (
      <div className='input-text'>
        <img  src={login} alt="" className='image'/>
       <form >
        <div className='form-group'>
            <label >Email/Phone Number</label>
            <input type='text' size="80" className='form-control' value={this.state.email_MobileNumber}  onChange={this.handleEPChange}/>
        </div>
        <div className='form-group'>
            <label>Password</label>
            <input type='password' className='form-control' value={this.state.password} onChange={this.handlePasswordChange}/>
          <div className='forget'>
            <button className="btn btn-link mx-2 my-2 my-sm-0 " type="submit">Forgot Password?</button>
            </div>
         </div>
         <form className="signUp">
         <button  className="btn btn-info my-2 my-sm-0 " type="submit">Login</button>
         </form>
         <h6 className='or'>--------------- OR---------------</h6>

         <div className="continue">
          <div>
            <label>Continue with Mobile Number</label>
            </div>
            <input type='number' placeholder="Mobile Number"value={this.state.number} onChange={this.handleNumberChange}/>
         </div>
      
         <form className="signUp">
         <Link to="/InputNext"  className="btn btn-info my-2 my-sm-0 " type="submit">Proceed</Link>
         </form>
        
        
        </form>
    </div>
    )
  }
}

export default InputLogin
