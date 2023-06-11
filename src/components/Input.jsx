//sign up page
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import sign from './signUp.png'
import './Input.css'
import google from './Google_Icons.webp'

class input extends Component {
    constructor(props) {
      super(props)  
    
      this.state = { 
         name:'',
         email:'',
         password:'',
         number:'',
         retype_password:''
         
      }
    }

    handleNameChange=(event)=>{
        this.setState({
            name: event.target.value
        })
    }
    handleNumberChange=(event)=>{
      this.setState({
        number: event.target.value
      })
    }
    handleEmailChange=(event)=>{
        this.setState({
            email: event.target.value
        })  
    }
    handlePasswordChange=(event)=>{
        this.setState({
            password: event.target.value
        })
    }
    handleReType_PasswordChange=(event)=>{
      this.setState({
        retype_password: event.target.value  
      })
    }
    
  render() {
  
    return (
      <div className='input-text'>
        <img  src={sign} alt="" className='image'/>
        <form >
         <div className='form-group1 '>
            <label for='exampleInputName'>Name</label>
            <input type='text' className='form-control' value={this.state.name} onChange={this.handleNameChange}/>
         </div>
         <div className='form-group1'>
            <label for='exampleInputPhone'>Phone No</label>
            <input type='number' className='form-control' value={this.state.number} onChange={this.handleNumberChange}/>
         </div>
         <div className='form-group'>
            <label for="exampleInputEmail1">Email</label>
            <input type='email' className="form-control"  aria-describedby="emailHelp" value={this.state.email} onChange={this.handleEmailChange}/>
         </div>
         <div className='form-group1'>
            <label for='exampleInputPassword'>Password</label>
            <input type='password' className='form-control' value={this.state.password} onChange={this.handlePasswordChange}/>
         </div>
         <div className='form-group1'>
            <label for='exampleInputReType-Password'>Re-type Password</label>
            <input type='password' className='form-control' value={this.state.retype_password} onChange={this.handleReType_PasswordChange}/>
            <p>Already have an account with us? 
              <Link to="/InputLogin" className="btn btn-link mx-2 my-2 my-sm-0 " type="submit">Login Here</Link>
            </p>
         </div>
        
         <form className="signUp">
         <button  className="btn btn-info my-2 my-sm-0 " type="submit">Sign Up</button>
         </form>
         <h6 className='or'>--------------- OR---------------</h6> 

         <div className='lgoogle'>
         <button type='submit' className="btn my-2 my-sm-0 ">
          <img src={google} width="20" height="20" alt=''></img> | Login With Google
        </button>
        </div>

        </form>

        
        
      </div>  
    )
  }
}

export default input           




