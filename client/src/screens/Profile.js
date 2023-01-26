import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../actions/userActions';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Success from '../components/Success';


export default function Profile() {
    const loginState = useSelector((state)=>state.loginReducer)
    const updateUserState = useSelector((state)=>state.updateUserReducer)
    const currentUser = loginState.currentUser
    const {loading, success, error} = updateUserState;
    const dispatch = useDispatch();
   
    const[name, setName] = useState(currentUser.name);
    const[email, setEmail] = useState(currentUser.email);
    const[password, setPassword] = useState('');
    const[cpassword, setCPassword] = useState('');

    const update = (e)=>{
        e.preventDefault();
        const updatedUser ={
            name: name,
            email: email,
            password: password
        }
        if(password == cpassword){
            dispatch(updateUser(updatedUser, currentUser._id))
        }else{
            alert('Confirm Password do no match')
        }
    }

  return (
    <div>
        <div className="row justify-content-center">
            <div className="col-md-5 card p-5" style={{marginTop: '150px'}}>
                <div className="div">
                    <h1 className='text-center mb-2'>Update</h1>
                    {error && (<Error error={error}/>)}
                    {loading && (<Loader/>)}
                    {success && (<Success success="Account Updated Successfully!"/>)}
                   <form onSubmit={update}>
                        <input type="text" className='form-control' required placeholder='Your Name Here' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <input type="text" className='form-control' required placeholder='E-mail Address' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input type="text" className='form-control' required placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <input type="text" className='form-control' required placeholder='Confirm Password' value={cpassword} onChange={(e)=>{setCPassword(e.target.value)}}/>
                        <button type='submit' className='btn btn-dark mt-3 float-end'>Update</button>
                   </form>
                </div>
            </div>
        </div>
    </div>
  )
}
