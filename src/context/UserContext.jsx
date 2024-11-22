import React, { createContext, useState } from 'react';

// Creamos el contexto que tiene que tener el email del usuarios y una función par aactualizar ese email 
export const UserContext = createContext(); 

// Creamos un componente UserProvider
export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(null); //inicializamos el estado

  // Funcion que coge el email y lo guarda en el estado
  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <UserContext.Provider value={{ email, updateEmail }}>  {/* dentro de provider esta el email y la funcion actualziar email */}
      {children} {/* Toos los componentes hijos puede acceder(Head,Form) */}
    </UserContext.Provider>
  );
};
