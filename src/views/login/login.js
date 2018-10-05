import React, { Component } from 'react'
import './login.css'

class login extends Component {
    render(){
        return(
            
            <div className='container'>
                <div className='title'>
                    <p>Welcome to Suvi</p>
                </div>
                <div className='module'>
                    <button className='facebook'><img src='/facebook.jpg'/>Facebook</button>
                    <br/>
                    <div className='line'></div>
                    <br/>
                    <button className='login'>Login</button>
                    <br/>
                    <button className='createAccount'>Create Account</button>
                    <br/>
                    <p>Forgot Password?</p>
                </div>
            </div>
        
        )
    }
}

export default login;