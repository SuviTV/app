import React, { Component } from 'react'
import axios from 'axios'
import headerlogo from './headerlogo.png'
import phoneimg from './iphoneloginimg.png'
import fbook from './facebook.png'
import './login.css'

class login extends Component {

    // componentDidMount() {
    //     axios.get('/auth/me')
    //         .then(resp => {
    //             if (resp.data !== 'Not logged in!') {
    //                 this.props.history.push('/home')
    //             }
    //         })
    //         .catch(err => {
    //             console.error(err)
    //         })
    // }

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
                        <button className='facebook'><img src={fbook}/>Login with Facebook</button>
                        <br/>
                        <div className='line'></div>
                        <br/>
                        <button className='login'>Login</button>
                        <br/>
                        <button className='createAccount'>Create Account</button>
                        <br/>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default login;