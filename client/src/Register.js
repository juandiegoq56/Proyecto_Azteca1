import './css/App.css';
import { useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import App2 from './Header';
import { hashSync } from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import { useCallback, useContext } from "react";
import axios from 'axios';
function App1() {
  const [Nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [usuariosList, setUsuarios] = useState([]);
  const saltRounds = 5; // Número de rondas de hashing (mayor número = mayor seguridad pero mayor tiempo de ejecución)
  const navigate = useNavigate();
  
  const password1 = hashSync(password, saltRounds);
  
  const validateEmail = (email) => {
    // Expresión regular para validar la dirección de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const val=useCallback(async (nombre) => {
      const response = await axios.get('http://localhost:3001/usuarios');
      const data = response.data
      const user = data.find(user => user.Nombre === nombre );
      return user
    })
  
  const add = () => {
    if (validateEmail(Email) ) {
      Axios.post('http://localhost:3001/create', {
        Nombre: Nombre,
        password: password1,
        Email: Email,
      })
        .then(() => {
          console.log(val(Nombre))
          navigate('/Login');
        })
        .catch((error) => {
          console.log('Error al registrar:', error);
        });
    } else {
      alert('Dirección de correo electrónico inválida');
    }
  };

  return (
    <div class="container">
      <div class="card-header">
        <App2 />
      </div>

      <div className="App">
        <div class="centrar">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Nombre
            </span>
            <input
              type="text"
              onChange={(event) => {
                setNombre(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese su Nombre"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Contraseña
            </span>
            <input
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese su Contraseña"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Email
            </span>
            <input
              type="text"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese su Correo"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <button className="btn btn-success" onClick={add}>
            Registrar
          </button>
        </div>
      </div>

      <div class="card-footer text-muted"></div>
    </div>
  );
}

export default App1;
