import React from 'react';
import '../SobreMi/SobreMi.css'

const SobreMi = () => {
    return (  
            <section className='ctn-sobremi d-flex flex-column'>
                <h1 className='mt-5'>Sobre mi</h1>
                <article
                    className='ctn-texto align-self-center mt-5 p-3'>
                        <p className='fs-4'> Durante mi formación, participé en el desarrollo de Quizwarts, una plataforma web desarrollada en equipo junto a tres compañeros. Este proyecto no solo fortaleció mis conocimientos en tecnologías como React, NestJS y MySQL, sino que también potenció mis habilidades en trabajo colaborativo, organización con Trello y control de versiones con GitHub.
                            Actualmente me encuentro en búsqueda activa de oportunidades laborales. Aún no tengo un stack definido, lo cual me permite adaptarme y aprender rápidamente tecnologías nuevas según los requerimientos del rol. Mi objetivo es seguir creciendo como profesional, aportar valor al equipo y estar siempre abierto al aprendizaje continuo.
                            Estoy entusiasmado por empezar mi carrera en el sector y formar parte de un entorno que me permita evolucionar y contribuir con compromiso, responsabilidad y actitud positiva.</p>
                    </article>
            </section>
    );
}
export default SobreMi;