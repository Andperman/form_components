import React from 'react';


const Card = ({ userData }) => { //user data lo recibe como prop del padre(objeto ocn los datos del usuario)
    if (!userData) return <p>No hay datos </p>;

    const { name, email, photoURL, age } = userData;

    return (
        <div className="card-container">
            <h2>{name}</h2>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Edad:</strong> {age}</p>
            {photoURL && <img src={photoURL} alt="Foto del usuario" className="user-photo" />}
        </div>
    );
};

export default Card;
