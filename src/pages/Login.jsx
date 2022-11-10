import React from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      signInWithEmailAndPassword(auth ,email, password);
      navigate("/");
    } catch (error) {
      setErr(true)
    }
  }

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>Ozen Chat</span>
            <span className='title'>Sign In</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <button>Sign In</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You don't have an account? <Link to="/register">Register</Link> </p>
        </div>
    </div>
  )
}

export default Login