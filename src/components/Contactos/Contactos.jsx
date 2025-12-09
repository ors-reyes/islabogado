import React, { useState } from 'react';
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
              <form action="https://formsubmit.co/desarrolloinmobiliariocmcp@gmail.com" method="POST">              
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
                <button type="submit" className="btn-submit">Enviar mensaje</button>
              </form>
            </section>
            <section className="contact-info">
              <h2>Otras formas de contacto</h2>
              
              
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