import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets';
import { Link, useNavigate ,  } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/Firebase';

const LoginPopup = ({setShowLogin}) => {

  const navigate = useNavigate()


const [LoginUser,setLoginUser] = useState({
  email:'',
  password:''

})

const handleChangeLogin =(e)=>{
  setLoginUser((prev)=>({...prev,[e.target.name]:e.target.value}))
}
const hansleSubmit =async(e)=>{
e.preventDefault()
try {
  await signInWithEmailAndPassword(auth,LoginUser.email,LoginUser.password)
navigate('/')
} catch (error) {
  console.log(error.massage)
}
}



  return (
    <div className='login-popup'>
        <form  className="login-popup-container" onSubmit={hansleSubmit}>
            <div className="login-popup-title">
                 <h2>Login</h2>
                 <Link to={'/'}>
                 <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                 </Link>
            </div>
            <div className="login-popup-inputs">
              
                <input type="email" name='email' value={LoginUser.email} placeholder='Your email' required onChange={handleChangeLogin} />
                <input type="password" name='password' value={LoginUser.password} placeholder='Password' required  onChange={handleChangeLogin}/>

            </div>
            <button>Login</button>

            {/* <div className="login-popup-condition">
              <input type="checkbox" required/>
              <p>By contunuing, i agree to to terms of use & privacy policy.</p>
            </div> */}
            
              <p>Create a new account? 
                <Link to={'/signup'} >
                <span>Click here</span>
                </Link>
              </p>

        </form>
    </div>
  )
}

export default LoginPopup