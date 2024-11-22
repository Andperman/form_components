import React, { useState } from 'react';
import { UserProvider } from './context/UserContext';
import Head from './components/Head/Head';
import Form from './components/Form/Form';
import Card from './components/Card/Card';
import './styles/styles.scss';

const App = () => {
  const [users, setUsers] = useState([]); //inicializamos estado users que contiene todos los usuarios
  const addUser = (newUser) => { //addUser es la funcion que pasamos como porps al formulario
    // Agregar el nuevo usuario 
    setUsers((prevUsers) => [...prevUsers, newUser]);
};

return (
  <UserProvider>
      <div>
          <Head />
          <Form onSubmit={addUser} /> {/* Pasar la función que agrega un usuario */}
          {/* Mostrar todos los usuarios como tarjetas */}
          {users.map((user, index) => (
              <Card key={index} userData={user} /> //prop que le pasamos al componente card
          ))}
      </div>
  </UserProvider>
);
};

export default App;