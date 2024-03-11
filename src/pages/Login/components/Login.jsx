import axios from 'axios';
import React, { useState } from 'react'
import {object,string} from 'yup'
import {Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate();
  const [user,setUser]=useState({
    email:'',
    password:'',
  });
  const [loader,setLoader]=useState(false)
  const [errors,setErrors]=useState([]);
  const handelChange=(e)=>{
    const {name,value}=e.target;
    setUser({
      ...user,
      [name]:value,
    })
  } 
  const validateData=async()=>{
    const loginSchema=object({
      email:string().email(),
      password:string().min(7).max(20).required(),
    })
  
  try{
   await loginSchema.validate(user,{abortEarly:false});
   return true;
  }catch(error){ 
    setErrors(error.errors)
    return false;
  }
 
}

  const handelSubmit=async(e)=>{
    e.preventDefault();
    setLoader(true)
    const validate =await validateData();
    console.log(validate);
    try{
    const {data}=await axios.post(`${import.meta.env.VITE_API}/auth/signin`,
    {
      email:user.email,
      password:user.password,
    }
    );
    setUser({
      email:'',
      password:'',
    })
    localStorage.setItem('token',data.token)
    if(data.message == 'success'){
      toast('login successfully created',{
        position: "bottom-left",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }
    navigate('/');
  }
  catch(error){
      toast.error(error.response.data.message, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition:Bounce,
        });
    }
  finally{
    setLoader(false)
  }
    
  }

  return (
   <>
   <h2>Login</h2>
   {errors.length > 0 ?errors.map (error=>
   <p>{error}</p>
   ):''}
   <form onSubmit={handelSubmit}>
    <label>Email</label>
    <input className='form-control' type="email" name="email" value={user.email} onChange={handelChange} />
    <label>Password</label>
    <input className='form-control' type="password" name="password" value={user.password} onChange={handelChange} />
    <button type="submit" className='btn btn-outline-success' disabled={loader?'disabled':null}>{!loader?'login':'wait..'}</button>
   </form>
 
   </>
  )
}
