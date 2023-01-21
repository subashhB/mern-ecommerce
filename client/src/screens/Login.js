import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { loginUser } from '../actions/userActions';

export default function Login() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const dispatch = useDispatch();

    const login =(e)=>{
        e.preventDefault();
        const user={
            email: email,
            password: password
        } 
        dispatch(loginUser(user));      
    }
    useEffect(()=>{
        if(localStorage.getItem('currentUser')){
            window.location.href = '/'
        }
    },[])

  return (
    <div>
        <div className="row justify-content-center">
            <div className="col-md-5 card p-5" style={{marginTop: '150px'}}>
                <div className="div">
                    <h1 className='text-center mb-2'>Login</h1>
                   <form onSubmit={login}>
                        <input type="text" className='form-control' required placeholder='E-mail Address' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input type="text" className='form-control' required placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <button type='submit' className='btn btn-dark mt-3 float-end'>Login</button>
                   </form>
                </div>
            </div>
        </div>
    </div>
  )
}
