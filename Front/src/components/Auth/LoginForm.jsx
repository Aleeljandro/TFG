import React, { useState } from 'react';
import { loginUser } from '../../services/auth_API';
import '../../styles/login.css';
import NotificationSystem from '../Shared/NotificationSystem';
import { NavLink, useNavigate } from "react-router-dom"; // ✅ agregado useNavigate
import "../../styles/layout.css";


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // ✅ hook para redirigir

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }
    if (password === '') {
      setError('Password cannot be empty');
      return;
    }
    setError('');
    loginUser({email, password})
      .then(message => {
        console.log(message)
        console.log('Correo registrado exitosamente:', email); // Mensaje en consola

        setSuccess("Login Ok");
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      })
      .catch(err => setError(err));
  };

  return (
    <form onSubmit={handleLogin} className="auth-form">
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="remember-me">
        <input
          type="checkbox"
          id="remember"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="remember">Remember me</label>
      </div>
      {error && <NotificationSystem message={error} type="error" />}
      {success && <NotificationSystem message={success} type="success" />}
      <button type="submit">Login</button>
      <button type="button" onClick={() => navigate('/register') }>
        Register
      </button>
      <button type="button" onClick={() => navigate('/forgot-password')}>
        Forgot Password?
      </button>
    </form>
  );
};

export default LoginForm;
