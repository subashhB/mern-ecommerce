import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../components/Error';
import Loader from '../components/Loader';

export default function Login() {
    const loginReducer = useSelector(state=> state.loginReducer)
    const{loading, error} = loginReducer
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
            <div className="col-md-4 card p-5" style={{marginTop: '150px'}}>
                <div className="div">
                    <h1 className='text-center mb-2'>Login</h1>
                    {error && (<Error error={error}/>)}
                    {loading && (<Loader/>)}
                   <form onSubmit={login}>
                        <input type="text" className='form-control mt-3' required placeholder='E-mail Address' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input type="text" className='form-control' required placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <button type='submit' className='btn btn-dark mt-3 float-center'>Login</button>
                   </form>
                   
                </div>
                <a href='/register' className='m-2'>Are you new here?</a>
            </div>
        </div>
    </div>
  )
}
