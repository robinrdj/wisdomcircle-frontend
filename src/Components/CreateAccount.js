import React,{useState, useEffect} from 'react';
import "./CreateAccount.css"
import WelcomeCard from './WelcomeCard';
import axios from 'axios';
import LogoImg from "./Resources/Group 1169.png"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';

function CreateAccount() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [userNMessage, setUserNMessage] = useState("");
    const [values, setValues] = React.useState({
      password: '',
      showPassword: false,
    });

  // sets the password everytime the values changes
    useEffect(()=>{
       setPassword(values.password);
    },[values])


    function handleSubmit(event){
      event.preventDefault();
      setPassword(values.password);
      if(password.length>=8){
        axios.post("http://localhost:5000/createUser",{firstName, lastName, number, email, password}).then(res=>{
          console.log(res.data);
          if(res.data==="Successfully Saved"){
            alert(res.data);
          }
          if(res.data==="user already exists with this email"){
             setUserMessage("user already exists with this email")
          }else{
             setUserMessage("")
          }
          if(res.data==="user already exists with this number"){
            setUserNMessage("user already exists with this number")
         }else{
            setUserNMessage("")
         }
        })
      }else{
        alert("Password must be atleast 8 characters")
      }
    }

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };
  
  return (
    <div className='createAccount__top'>
    <div className='createAccount'>
       <WelcomeCard />
        <div className='createAccount__form'>
        <img src={LogoImg} alt="logo__img" className='logo__imgc'/>
        <div className='createAccount__texts'>
        <p className='createAccount__createText'>Create an account</p>
        <p className='createAccount__accountText'>Already have an account? <span className='signIn__signInSpan'><a href="/" className='signIn__signInLink'>Sign In</a></span></p> 
        </div>
         <form className="createAccount__form__inputs" onSubmit={handleSubmit}>
         <input className="createAccount__form__input"  placeholder="First Name" type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
         <input className="createAccount__form__input" placeholder="Last Name" type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
         <input className="createAccount__form__input" placeholder="Email Address" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} pattern = "^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})" required/>
         {userMessage.length?<p style={{color:"red",marginTop:"0px"}}>{userMessage}</p>:""}
         <input className="createAccount__form__input"  placeholder="Mobile Number" type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" value={number} onChange={(e)=> setNumber(e.target.value)} required/>
           {userNMessage.length?<p style={{color:"red",marginTop:"0px"}}>{userNMessage}</p>:""}
           <div className="signIn__form__inputSpl__top" >
         <Input  className="signIn__form__inputSpl" 
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            pattern="(?=.*[a-z]).{8,}" placeholder="password"   required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          </div>
         <p className='createAccount__passwordText' style={{color:values.password.length>=8?"black":"red"}}>password must be atleast 8 characters</p>
         <p className='createAccount__policyText'>By clicking Sign Up you are indicating that you have read and acknowledged the Terms of Service and Privacy Notice</p>
         <input className='createAccount__signUpButton'  value="Sign Up"  type="submit" />
        </form>
        </div>
    </div>
    </div>
  )
}

export default CreateAccount;