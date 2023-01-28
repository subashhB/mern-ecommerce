import React, { useState , useEffect} from 'react'
import { getAllUsersReducer } from '../reducers/userReducers';
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../actions/userActions';
import Loader from '../components/Loader';
import Error from '../components/Error';

export default function UsersList() {
    const getAllUsersState = useSelector(state=>state.getAllUsersReducer)
    const {users, loading, error} = getAllUsersState;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllUsers())
    }, [])
        
  return (
    <div>
        <h3>Users List</h3>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users && users.map(user=>{
                    return (<tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><i className='fa fa-trash'></i></td>
                    </tr>)
                })}
            </tbody>
        </table>
        {loading && (<Loader/>)}
        {error && (<Error error='Something went Wrong'/>)}
    </div>
  )
}
