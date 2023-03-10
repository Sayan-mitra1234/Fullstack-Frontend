import { useState } from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom"
import "./style.css"
const Signup=()=>{
    const [data,setData]=useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const [error,setError]=useState("")
    const navigate=useNavigate()
    const handleChange=({
        currentTarget:input
    })=>{
        setData({...data,[input.name]:input.value})

    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const url="https://todo-fullstack-rmxd.onrender.com/api/users";
            const {data:res}=await axios.post(url,data)
            navigate("/login")
            console.log(res.message);
        } catch (error) {
            if(error.response && error.response.status>=400 && error.response.status<=500){
                setError(error.response.data.message)
            }
        }

    }
    return(
        <>
            <div className="container">
                <div>
                 
                    <div>
                        <form onSubmit={handleSubmit}>
                            <h1>Create Account</h1>
                            <label >FirstName : </label>
                            <input type="text" placeholder="FirstName" name="firstName" onChange={handleChange} value={data.firstName} required />
                            <br />
                            <label >LastName : </label>
                            <input type="text" placeholder="LastName" name="lastName" onChange={handleChange} value={data.lastName} required />
                            <br />
                            <label >Email : </label>
                            <input type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required />
                            <br />
                            <label >Password : </label>
                            <input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required />
                        {error && <div>{error}</div>}
                        <br />
                        <button type="submit" className="signin">Sign-up</button>
                        </form>
                    </div>
                    <div>
                        <h1>Have a Account Log-In</h1>
                        <Link to="/login">
                            <button type="button" className="signin">
                                Sign-In
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default Signup