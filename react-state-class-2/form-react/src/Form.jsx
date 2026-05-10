import { useState } from "react"

export default function Form(){
    let [formData,setFormData]=useState({
        fullName:"",
        username:"",
        password:"",
    });

    let handelInputChnage =(event)=>{
        let fieldName=event.target.name;
        let newValue=event.target.value;

        setFormData((currData)=>{
            
            return {...currData,[fieldName]:newValue};
        });
    };

    let handelSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            username:"", 
            password:"",
        })
    }

    return (
        <form onSubmit={handelSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text"
             placeholder="enter your full name"
            value={formData.fullName} 
            id="fullName"
            name="fullName"
            onChange={handelInputChnage}
            />
            <br /><br />
            <br /><br />

            <label htmlFor="username">Username</label>
            <input type="text"
            placeholder="enter your username"
            value={formData.username} 
            id="username"
            name="username"
            onChange={handelInputChnage} 
            />
            <br /><br />
            <br /><br />
            <label htmlFor="password">password</label>
            <input type="text"
             placeholder="enter your password"
            value={formData.password} 
            id="password"
            name="password"
            onChange={handelInputChnage}
            />
            
            
            <button>Submit</button>
        </form>
    )
}