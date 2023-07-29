import { useState } from 'react';
import Image from 'next/image';
import Facebook from '@/assets/svgs/facebook-color.svg';
import Twitter from '@/assets/svgs/twitter-color.svg';
import Google from '@/assets/svgs/goole-color.svg';
import './styles.scss';
const SliderLogin: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };
  return (
    <div className={`container ${isSignup ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form action="">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <Image src={Facebook} width={20} height={20} alt="" />
            </a>
            <a href="#" className="social">
              <Image src={Google} width={20} height={20} alt="" />
            </a>
            <a href="#" className="social">
              <Image src={Twitter} width={20} height={20} alt="" />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>SignUp</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign In</h1>
          <div className="social-container">
            <a href="#" className="social">
              <Image src={Facebook} width={20} height={20} alt="" />
            </a>
            <a href="#" className="social">
              <Image src={Google} width={20} height={20} alt="" />
            </a>
            <a href="#" className="social">
              <Image src={Twitter} width={20} height={20} alt="" />
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <a href="#">Forgot Your Password</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" onClick={toggleForm}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and start the journey with us</p>
            <button className="ghost" onClick={toggleForm}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SliderLogin;
