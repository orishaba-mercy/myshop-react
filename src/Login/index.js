import React,{useState}from "react";
import './style.css'
import { Link} from "react-router-dom";

const Login=()=>{
    const[username,setuserName]=useState('');
    const[password,setpassword]=useState('');
    console.log({username});
    console.log({password})
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const data={
            username:username,
            passWord:password,

        }
        try{
            const response =await fetch('https://dummyjson.com/auth/login',{
                method:'POST',
                headers:{
                    'content-Type':'application/json'
                },
            body:JSON.stringfy(data)
                })
                const result = await response.json();
                console.log({result});
        }
        catch(error){
            console.log(error.message);

        }
    }
    return(
       <div>
        <form className="form" onSubmit={handleSubmit}>
        <h1> Login</h1>
        <input placeholder="Enter UserName" type="text" 
        onChange={(e)=>(setuserName(e.target.value))}/>  
        <br/>
        <br/>
        
        <input placeholder="Enter PassWord" type="password"
        onChange={(e)=>(setpassword(e.target.value))}
        />
       <br/>
       <br/>
        <Link to={`/products/`}><button type="Submit">Login</button></Link>
        </form>
       </div>
    )   
}
export default Login;