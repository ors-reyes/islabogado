import React, { useState } from 'react';
import { RiCustomerServiceFill } from 'react-icons/ri';
import { IoMdMail } from 'react-icons/io';
import { PiMapPinLineBold } from 'react-icons/pi';
import { FaWhatsapp } from 'react-icons/fa';
import './Contactos.css';

const Contactos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Aquí puedes agregar la lógica para enviar el formulario
  //   console.log('Datos del formulario:', formData);
  //   console.log('Datos del formulario:', formData.nombre);
  //   alert('Formulario enviado correctamente');
    
  //   // Resetear los campos después del envío
  //   setFormData({
  //     nombre: '',
  //     email: '',
  //     telefono: '',
  //     asunto: '',
  //     mensaje: ''
  //   });
  //   // window.location.href=`mailto:ors2323@gmail.com?subjet=FormularioIslabogado&body=Nombre%3A%20${formData.nombre}%0ACorreo%20electr%C3%B3nico%3A%20xxxx%0ATel%C3%A9fono%3A%20xxxxx%0AMotivo%3A%20xxxx%0AMensaje%20%3A%20xxxx`
  // };

  return (
    <>
      <section className="padding secc80">
        <h1 style={{ paddingBottom: "20px" }}>Contacto</h1>
        <p style={{ paddingBottom: "20px" }}>Estamos aquí para responder todas tus consultas</p>
        <div className="contactos-container">
          <div className="contactos-wrapper">
            {/* Sección del formulario */}
            <section className="form-section">
              <h2>Envíanos un mensaje</h2>
              <form action="https://formsubmit.co/c63a5fc7b6331028831a50b2870f0580" method="POST">
              {/* <form onSubmit={handleSubmit}> */}
                <div className="form-group">
                  <label htmlFor="nombre">Nombre completo *</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    value={formData.nombre}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono *</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono" 
                    value={formData.telefono}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="asunto">Asunto *</label>
                  <select 
                    id="asunto" 
                    name="asunto" 
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccione su motivo</option>
                    <option value="terrenos">Información sobre terrenos</option>
                    <option value="financiacion">Consultas sobre financiación</option>
                    <option value="visita">Solicitar visita</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje *</label>
                  <textarea 
                    id="mensaje" 
                    name="mensaje" 
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <input type="hidden" name="_redirect" value="https://ors-reyes.github.io/islabogado/"></input>
                 {/* <input type="hidden" name="_captcha" value="false"></input> */}
                <button type="submit" className="btn-submit">Enviar mensaje</button>
              </form>
            </section>
            
            {/* Sección de información de contacto */}
            <section className="contact-info">
              <h2>Otras formas de contacto</h2>
              
              {/* <div className="contact-item">
                <div className="contact-icon">
                  <RiCustomerServiceFill />
                </div>
                <div className="contact-details">
                  <h3>Teléfono</h3>
                  <div className="phone-layout">
                    <p className="phone-number">+595 974 522 000</p>
                    <p className="phone-schedule">Lunes a Viernes de 8:00 a 17:00</p>
                  </div>
                </div>
              </div> */}
              
              <div className="contact-item">
                <div className="contact-icon">
                  <IoMdMail />
                </div>
                <div className="contact-details">
                  <h3>Correo electrónico</h3>
                  <p className="highlight">desarrolloinmobiliariocmcp@gmail.com</p>
                  <p>Respondemos en menos de 24 horas</p>
                </div>
              </div>
              
              <hr />
              
              <div className="contact-item">
                <div className="contact-icon">
                  <PiMapPinLineBold />
                </div>
                <div className="contact-details">
                  <h3>Dirección</h3>
                  <p>Barrio Cerrado Isla Bogado</p>
                  <p>Visitas con cita previa</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaWhatsapp />
                </div>
                <div className="contact-details">
                  <h3>WhatsApp</h3>
                  <p className="highlight">+595 974 522 000</p>
                  <p>Atención inmediata</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactos;