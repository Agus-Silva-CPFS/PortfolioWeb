import React from 'react';
import '../Inicio/Inicio.css'

const Inicio = () => {
    return (
        <div className="d-flex flex-column fondo-main justify-content-center">
            <div className="d-flex contenedor-inicio">
                <div className='d-flex flex-column justify-content-center contenedor-titulo'>
                    <h1 className='text-start'>Hola, soy</h1>
                    <h1 className='text-start'>Agustin Silva</h1>
                    <h1 className='text-start'>Desarrollador Web.</h1>  
                </div>
                <div className='contenedor-imagen'>
                    <img src='/assets/fotodeperfil.jpg' alt="Foto de perfil" className='img-inicio' />
                </div>
            </div>
        </div>
    );
}
export default Inicio;