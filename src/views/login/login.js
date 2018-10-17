import React, { Component } from 'react'
import axios from 'axios'
import headerlogo from './headerlogo.png'
import phoneimg from './iphoneloginimg.png'
import fbook from './facebook.png'
import './login.css'

class login extends Component {

    componentDidMount() {
        axios.get('/auth/me')
            .then(resp => {
                if (resp.data !== 'Not logged in!') {
                    this.props.history.push('/home')
                }
            })
            .catch(err => {
                console.error(err)
            })
    }


    render(){
        return(
            <div>
                <div className='header'>
                    <img className='headerlogo' src={headerlogo}/>
                </div>
                <div className='container'>
                    <div className='iphoneimgdiv'>
                        <img className='iphone' src={phoneimg}/>
                    </div>
                    <div className='module'>
                        <h1 className='welcome'>Welcome to Suvi</h1>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <form action='http://localhost:3001/auth' >
                            <input type='submit' className='facebook' value='Login with Facebook'/>
                        </form>
                        <br/>
                        <div className='line'></div>
                        <br/>
                        <form action='http://localhost:3001/auth'>
                            <input type='submit' className='login' value='Login'/>
                        </form>
                        <br/>
                        <form action='http://localhost:3001/auth'>
                            <input type='submit' className='createAccount' value='Create Account'/>
                        </form>
                        <br/>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default login;