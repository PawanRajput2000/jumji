import React,{useState} from 'react'
import "./SignUP.css"
import { Link } from 'react-router-dom';




function SignUP() {

    const [formData, setFormData] = useState({
        Fullname: "",
        Email: "",
        Password: "",
      });
    
      const handleChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };
    
    const onsubmit = async (e)=>{
        e.preventDefault()
    
        let {Fullname , Email , Password} = formData
        let res =  await fetch("https://jumjibackend.onrender.com/signup",{
            method :"post",
            body:JSON.stringify({
                Fullname ,Email, Password
            }),headers:{
                "content-Type":"application/json"
            }
        })
        let result = await res.json()

        if(result.status === false){
            alert(result.data)
        }else{
            alert(" account created successfully")
            
        }
    }
    
    return (
        <div>
            <form  onSubmit ={onsubmit} className="signup-form">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label >Full Name</label>
                    <input type="text"  name="Fullname" value = {formData.Fullname}  onChange={handleChange} placeholder='Enter FullName' required />
                </div>
                <div className="form-group">
                    <label >Email</label>
                    <input type="email" name="Email" value = {formData.Email} onChange={handleChange} placeholder='Enter Email' required />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password"  name="Password" value = {formData.Password} onChange={handleChange}  placeholder="Enter Password" required />
                </div>
                <button type="submit">Sign Up</button>
                <div className="form-options">
                    <p><Link to ={"/login"}>Already have account ?</Link> </p>
                    
                    
                </div>
            </form>

        </div>
    )
}

export default SignUP