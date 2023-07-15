import App2 from './Header';
import './css/Login.css';

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';
import useUser from './useUsers';
import { useEffect } from 'react';


const App3 = () => {
   
    const[Nombre,setNombre]=useState("");
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {login,isLogged}=useUser()
    useEffect(()=>{
      if(isLogged)navigate('/Home')
    },[isLogged,navigate])
    const handleSubmit = (event) => {
      event.preventDefault();
      // lógica para autenticar al usuario con el email y la contraseña ingresados
      
       login()
       localStorage.setItem("Nombre", Nombre);
       localStorage.setItem("Contra", password);
    };
  return (
    <div class="container">

    <div className="App">
     
       
       </div>
          
     <div class="card-header">
     <App2 />
     
     </div>
     <div className="card1-body">
    <div className='centrar'>
     < div className='centrar1'>
    <form onSubmit={handleSubmit}>
     <div className="input-group mb-3">
     
     <span className="input-group-text" id="basic-addon1">Nombre</span>
     
     <input type="text" 
      onChange={(event)=>{
       setNombre(event.target.value)
      }}
     className="form-control" placeholder="Ingrese su Nombre" aria-label="Username" aria-describedby="basic-addon1"/>
   </div>
   <div className="input-group mb-3">
     <span className="input-group-text" id="basic-addon1">Contraseña</span>
     <input type="password" 
     onChange={(event)=>{
      setPassword(event.target.value)}
     
     }
     className="form-control" placeholder="Ingrese su Contraseña" aria-label="Username" aria-describedby="basic-addon1"/>
   </div>
   
    <button className='btn btn-success' >Login</button> 
   </form>
    </div>
    </div>
    </div>
    </div>
    
    

  );
};

export default App3;
