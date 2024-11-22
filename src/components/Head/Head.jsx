import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';


const Head = () => {
    const { email } = useContext(UserContext); //accedemos al contexto //hook par aaceder al email 

    return (
        <header className="head-container">
            <h1>Email del usuario: {email || 'No registrado'}</h1> {/* CUnado cambie el estado del contexto se actualiza email ) */}
        </header>
    );
};

export default Head;
