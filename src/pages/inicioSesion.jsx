import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Importa useHistory para redireccionar después del login
import axios from 'axios';
import "../styles/inicioSesion.css";


function Login() {
  const history = useHistory(); // Instancia de useHistory para redireccionar
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sede, setSede] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/', { username, password, sede });
      if (response.data.success) {
        setMsg('Inicio de sesión exitoso');
        // Redirigir al dashboard o a la página deseada después del login
        history.push('/dashboard'); // Ejemplo de redirección a '/dashboard'
      } else {
        setMsg(response.data.message);
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      setMsg('Error en el inicio de sesión');
    }
  };

  return (
    <div className="container">
      <div className="formContainer">
        <h2>Compensación cajas</h2>
        <div className="logovaq">
          <img
            className="logo-vq"
            src={process.env.PUBLIC_URL + '/images/logoVaquita.png'}
            alt="logo"
          />
        </div>
        <h3>¡Inicia Sesión!</h3>
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <div className="left">
              <label htmlFor="username">Usuario</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Usuario..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <i className="fa fa-user"></i>
          </div>
          <div className="inputContainer">
            <div className="left">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Contraseña..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <i className="fa fa-lock"></i>
          </div>
          <div className="inputContainer">
            <div className="left">
              <select
                id="sede"
                name="sede"
                className="opcion-select"
                value={sede}
                onChange={(e) => setSede(e.target.value)}
                required
              >
                <option value="" disabled>
                  Selecciona la sede...
                </option>
                <option value="001">La 33</option>
                <option value="002">San Cristobal</option>
                <option value="003">Poblado</option>
                <option value="004">Rionegro</option>
                <option value="005">Sabaneta Avenida</option>
                <option value="006">Intermedia</option>
                <option value="007">San Antonio de Prado</option>
                <option value="008">Sabaneta Parque</option>
                <option value="009">Pedregal</option>
                <option value="010">San Joaquin</option>
                <option value="011">Floresta</option>
                <option value="012">San Marcos</option>
                <option value="013">Laureles</option>
              </select>
            </div>
            <i className="fa fa-store"></i>
          </div>
          <div>{msg && <p>{msg}</p>}</div>
          <button type="submit">Inicia Sesión</button>
          <p>
            ¿Aún no tienes cuenta?{' '}
            <a href="/registro">Regístrate!</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
