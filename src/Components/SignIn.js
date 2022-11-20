import React,{useState, useEffect} from 'react';
import "./SignIn.css";
import WelcomeCard from './WelcomeCard';
import axios from 'axios';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import LogoImg from "./Resources/Group 1169.png"


function SignIn() {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const [values, setValues] = React.useState({
      password: '',
      showPassword: false,
    });
     
    useEffect(()=>{
      setPassword(values.password);
      setEmail(email);
      if(text.length===10 && !text.includes("@")){
        setMobileNo(text)
        setEmail("")
     }else{
      setEmail(text)
      setMobileNo("")
     }
    },[email,values, text])

   function handleSubmit(event){
       event.preventDefault();
       setPassword(values.password);
       setEmail(email);
       if(text.length===10 && !text.includes("@")){
          setMobileNo(text)
          setEmail("")
       }else{
        setEmail(text)
        setMobileNo("")
       }
       
       axios.post("http://localhost:5000/signIn",{email, mobileNo,password}).then(res=>{
             console.log(res.data);
             if(res.data==="sign in"){
              alert("Successfully Signed In")
             }
             if(res.data==="wrong password"){
              setPasswordMessage("Sorry! Password is not matching")
           }else{
             setPasswordMessage("")
           }

           if(email.length){
            if(res.data==="user does not exist"){
              setUserMessage(" Sorry! This email  is not registered.")
           }else{
              setUserMessage("")
           }
           }else{
            if(res.data==="user does not exist"){
              setUserMessage(" Sorry! This Mobile No  is not registered.")
           }else{
              setUserMessage("")
           }
           }
       })
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
    <div className='signIn__top'>
        <WelcomeCard className="welcomeCard" />
        <div className='signIn'>
          <div className="logo__imgc__top">
          <img src={LogoImg} alt="logo__img" className='logo__imgc'/>
          </div>
          <div className='signIn__texts'>
        <p className='signIn__wisdomText'>Sign In to WisdomCircle</p>
        <p className='signIn__accountText'>Don’t have an account? <span className='signIn__signUpSpan'><a href="/signup" className='signIn__signUpLink'>Sign Up</a></span></p>
        </div>
        <form className='signIn__form__inputs' onSubmit={handleSubmit}>
        <input className="signIn__form__input"  placeholder="Email or Mobile No" type = "text" value={text} onChange={(e)=> setText(e.target.value)} pattern = "^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(\d{3}\d{3}\d{4})$" required />
        {userMessage.length?<p style={{color:"red",marginTop:"0px"}}>{userMessage}</p>:""}
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
          {passwordMessage.length?<p style={{color:"red",marginTop:"0px"}}>{passwordMessage}</p>:""}
          <p className='signIn__form__forgotLink'>Forgot password</p>
        <input className='signIn__form__signInButton'  value="Sign In"  type="submit" />     
        </form>
        </div>
    </div>
  )
}

export default SignIn;