import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Form = ({ onSubmit }) => {  //pasamos por prop adduser(onSubmit)
  const { updateEmail } = useContext(UserContext); // Usar el contexto para actualizar el email
  const [formData, setFormData] = useState({ //estado que contendrá los datos
    name: '',
    email: '',
    photoURL: '',
    age: '',
  });

  const handleChange = (e) => {   
    const { name, value } = e.target;  //iname atributo y value el valor actual (lo que el usurio esta escribiendo )
    setFormData({ ...formData, [name]: value });
  };
//manejamos el envio del fomulario
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pasamos los datos al componente padre
    updateEmail(formData.email); // Actualizamos el email en el contexto
    setFormData({ name: '', email: '', photoURL: '', age: '' }); // Limpiamos el formulario
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="photoURL">URL Foto:</label>
        <input type="text" id="photoURL" name="photoURL" value={formData.photoURL} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="age">Edad:</label>
        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
