import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

import bemol_logo from '../assets/images/Bemol.logo.png';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();


  if (!authContext) {
    throw new Error("AuthContext deve ser usado dentro de um AuthProvider");
  }

  const { setAuthData } = authContext;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e:any) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      setAuthData(response.data.token);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <div className='container-fluid vh-100 '>
      <nav className="navbar navbar-light bg-light px-3">
        <a className="navbar-brand" href="#">
          <img src={bemol_logo} alt="Bemol Logo" height="80"/>
        </a>
      </nav>

      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="card p-4 shadow" style={{ width: '550px', height:'500px' }}>
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-5">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                required
              />
            </div>
            <div className="mb-5">
              <label className="form-label">Senha</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
            </div>
            {error && <p className="text-danger text-center">{error}</p>}
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <div className="text-center mt-3">
            <span>Não tem uma conta? </span>
            <Link to="/signup" className="text-decoration-none">Criar conta</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;