import axios from 'axios';
import React, { useState } from 'react'
import {object,string} from 'yup';
import {Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const navigate =useNavigate();
    const [user,setUser]=useState({
        userName:'',
        email:'',
        password:'',
        image:'',
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
    const handelImageChange=(e)=>{
        const {name,files}=e.target;
        setUser({
            ...user,
            [name]:files[0],
        })
    }
    const validateData=async()=>{
        const registerSchema=object({
            userName:string().min(5).max(20).required(),
            email:string().email().required(),
            password:string().min(5).max(20).required(),
            image:string().required(),
        })
        try{
            await registerSchema.validate(user,{abortEarly:false});
            return true;
        }catch(error){
            console.log("validation erroes",error.errors);
            setErrors(error.errors);
            return false;
        }
    }  
    const handelSubmit=async(e)=>{
        e.preventDefault();
        setLoader(true);
        const validate=await validateData(); 
        console.log(validate);
        const formData = new FormData();
        formData.append('userName',user.userName);
        formData.append('email',user.email);
        formData.append('password',user.password);
        formData.append('image',user.image);
        try{
        const {data} =await axios.post(`${import.meta.env.VITE_API}/auth/signup`,formData);
        setUser({
            userName:'',
            email:'',
            password:'',
            image:'',
        })
        if(data.message == 'success'){
            toast("your account has been successfully created", 
         {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition:Bounce,
        });
        }
         navigate("/login");
    }
    catch(error){  
    if(error.response.status === 409) {
        toast.error('already email exist message',
         {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
    }
    setLoader(false);
}
finally{
    setLoader(false);
}     
}
  return (
    <>
    <h2>Register</h2>
    {errors.length > 0 ?errors.map(error=>
    <p>{error}</p>
    ):''}
    <form onSubmit={handelSubmit}>
        <label>user Name</label>
        <input className="form-control" type="text" name="userName" value={user.userName} onChange={handelChange}/>
        <label>Email</label>
        <input className="form-control" type="email" name="email" value={user.email} onChange={handelChange}/>
        <label>Password</label>
        <input className="form-control" type="password" name="password" value={user.password} onChange={handelChange}/>
        <label>Image</label>
        <input className="form-control" type="file" name="image"  onChange={handelImageChange}/>
        <button type="submit" className="btn btn-outline-success" disabled={loader?'disabled':null} >{!loader ? 'regiser' : 'wait....'}</button>
    </form>
    </>
  )
}
