import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { auth ,db} from './../../firebase/Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc,doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "./SignUp.css"

const SignUp = ({ setShowsignup }) => {
  const navigate = useNavigate()
  const [signupUser, setSignupUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChangeRegister = (e) => {
    setSignupUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const hansleSubmit = async(e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,signupUser.email,signupUser.password)
      const user = auth.currentUser;
      if(user)
      {

        await setDoc(doc(db,"users",user.uid),{
          name:signupUser.name,
          email:signupUser.email,
          // password:signupUser.password
        })
      }

      toast("user singup succsessfully!",{
        position: "top-right"
      })
      navigate('/')
    } catch (error) {
      console.log(error.message)
      toast.error(error.message,{
        position:"bottom-center"
      })
    }
  };

  return (
    <div className="signup-popup">
      <form className="signup-popup-container" onSubmit={hansleSubmit}>
        <div className="signup-popup-title">
          <h2>SignUp</h2>
          <Link to={"/"}>
            <img
              onClick={() => setShowsignup(false)}
              src={assets.cross_icon}
              alt=""
            />
          </Link>
        </div>
        <div className="signup-popup-inputs">
          <input
            type="text"
            name="name"
            value={signupUser.name}
            placeholder="Your name"
            required
            onChange={handleChangeRegister}
          />

          <input
            type="email"
            name="email"
            value={signupUser.email}
            placeholder="Your email"
            required
            onChange={handleChangeRegister}
          />
          <input
            type="password"
            name="password"
            value={signupUser.password}
            placeholder="Password"
            required
            onChange={handleChangeRegister}
          />
        </div>
        <button>SignUp</button>

        <div className="signup-popup-condition">
          <input type="checkbox" required />
          <p>By contunuing, i agree to to terms of use & privacy policy.</p>
        </div>
        <p>
          Alredy Account?
          <Link to={"/login"}>
            <span>Login here</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
