import React, { useState } from "react";
import axios from "axios";

import bemol_logo from "../assets/images/Bemol.logo.png";

import { Link, useNavigate  } from "react-router-dom";
import SweetAlert from "sweetalert2";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: "",
    localidade: "",
    uf: "",
  });

  const navigate = useNavigate(); 

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);

    if (e.target.value.length === 8) {
      const response = await axios.get(
        `https://viacep.com.br/ws/${e.target.value}/json/`
      );
      setAddress(response.data);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      cep,
      logradouro: address.logradouro,
      bairro: address.bairro,
      cidade: address.localidade,
      estado: address.uf,
    };

    try {
      await axios.post("http://localhost:5000/api/users", userData);
      SweetAlert.fire({
        title: "Conta criada com sucesso!",
        text: "Você será redirecionado para a página de login.",
        icon: "success",
        toast: true,
        position: "top-end", 
        showConfirmButton: false,
        timer: 4000, 
        willClose: () => {
          setName("");
          setEmail("");
          setPassword("");
          setCep("");
          setAddress({
            logradouro: "",
            bairro: "",
            cidade: "",
            estado: "",
            localidade: "",
            uf: "",
          });
          navigate("/login");
        },
      });
    } catch (err) {
      SweetAlert.fire({
        title: "Erro",
        text: "Ocorreu um erro ao criar sua conta. Tente novamente.",
        icon: "error",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="container-fluid vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light px-3">
        <a className="navbar-brand" href="#">
          <img src={bemol_logo} alt="Bemol Logo" height="80" />
        </a>
      </nav>

      {/* Signup Form */}
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div
          className="card p-4 shadow"
          style={{ width: "550px", height: "auto" }}
        >
          <h2 className="text-center mb-4">Criar Conta Bemol</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="form-label">Nome</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
              <label className="form-label">CEP</label>
              <input
                type="text"
                className="form-control"
                value={cep}
                onChange={handleCepChange}
                placeholder="Digite seu CEP"
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Logradouro</label>
              <input
                type="text"
                className="form-control"
                value={address.logradouro}
                readOnly
                placeholder="Logradouro"
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Bairro</label>
              <input
                type="text"
                className="form-control"
                value={address.bairro}
                readOnly
                placeholder="Bairro"
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Cidade</label>
              <input
                type="text"
                className="form-control"
                value={address.localidade}
                readOnly
                placeholder="Cidade"
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Estado</label>
              <input
                type="text"
                className="form-control"
                value={address.uf}
                readOnly
                placeholder="Estado"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Criar Conta
            </button>
          </form>
          <div className="text-center mt-3">
            <Link to="/login" className="text-decoration-none">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
