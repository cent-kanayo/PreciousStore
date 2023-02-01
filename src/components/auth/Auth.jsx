import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [cshowPassword, setcShowPassword] = useState(false);
  const [isRegister, setIsRegistered] = useState(true);
  const [userInfo, setUserInfo] = useState({
    fullname: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleClick = (e) => {
    if (isRegister) {
      //login
      if (userInfo.email && userInfo.password) {
        fetch('http://localhost:3000', {
          method: 'POST',
          body: { email: userInfo.email, password: userInfo.password },
        });
      }
      navigate('/');
      return;
    }
    // register
    if (userInfo.email && userInfo.password && userInfo.fullname) {
      fetch('http://localhost:3000', {
        method: 'POST',
        body: {
          email: userInfo.email,
          password: userInfo.password,
          fullname: userInfo.fullname,
        },
      });
    }
    navigate('/');
  };
  return (
    <section className="flex main">
      <div className="relative flex-1">
        <img
          src="https://media.istockphoto.com/id/1429456277/photo/online-shopping-with-credit-car-or-cash-money.jpg?b=1&s=170667a&w=0&k=20&c=ag_iAVhF9G24GHgRIXdwt50NUn7xvmz3ORGTlFPHv7Q="
          alt="E-commerce cart"
          className="block w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 bg-slate-100 grid place-items-center px-20">
        <form className="bg-white p-4 shadow-md hover:shadow-lg transition-all duration-300 ease-linear w-[400px] h-[200px]">
          {!isRegister && (
            <>
              <div className="border-1 border-orange-400 rounded-sm">
                <input
                  type="text"
                  placeholder="Enter Full name"
                  value={userInfo.fullname}
                  onChange={handleChange}
                  name="fullname"
                />
              </div>
            </>
          )}
          <div className="border-1 border-orange-400 rounded-sm">
            <input
              type="text"
              placeholder="Enter Username or email"
              value={userInfo.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="flex justify-between items-center  border-1 border-orange-400 rounded-sm">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              value={userInfo.password}
              onChange={handleChange}
              name="password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>
          {!isRegister && (
            <div className="flex justify-between items-center  border-1 border-orange-400 rounded-sm">
              <input
                type={cshowPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                value={userInfo.cpassword}
                onChange={handleChange}
                name="cpassword"
              />
              <button
                type="button"
                onClick={() => setcShowPassword(!cshowPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
          )}
          <button onClick={handleClick}>
            {!isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        <p>
          {isRegister
            ? "Don't have an account yet? "
            : 'Already have an account? '}
          <button onClick={() => setIsRegistered(!isRegister)}>
            {isRegister ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
