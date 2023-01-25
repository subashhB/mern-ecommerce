import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { registerNewUser } from '../actions/userActions';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Success from '../components/Success';

export default function Register() {
    const registerState = useSelector(state=> state.registerNewUserReducer)
    const {loading, error, success} = registerState
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[cpassword, setCPassword] = useState('');
    const dispatch = useDispatch();

    const register =(e)=>{
        e.preventDefault();
        const user={
            name: name,
            email: email,
            password: password
        }
        if(password == cpassword){
            dispatch(registerNewUser(user))
        }
        else{
            alert("Confirm Password doesn't match")
        }
       
    }

  return (
    <div>
        <div className="row justify-content-center">
            <div className="col-md-5 card p-5" style={{marginTop: '150px'}}>
                <div className="div">
                    <h1 className='text-center mb-2'>Register</h1>
                    {error && (<Error error={error}/>)}
                    {loading && (<Loader/>)}
                    {success && (<Success success="Account Created Successfully!"/>)}
                   <form onSubmit={register}>
                        <input type="text" className='form-control' required placeholder='Your Name Here' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <input type="text" className='form-control' required placeholder='E-mail Address' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input type="text" className='form-control' required placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <input type="text" className='form-control' required placeholder='Confirm Password' value={cpassword} onChange={(e)=>{setCPassword(e.target.value)}}/>
                        <button type='submit' className='btn btn-dark mt-3 float-end'>REGISTER</button>
                   </form>
                   
                </div>
                <a href='/login' className='m-3'>Already have an account?</a>
            </div>
        </div>
    </div>
  )
}
