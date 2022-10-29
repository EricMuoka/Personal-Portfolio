import React from 'react'
import GOTH from '../../assets/Eric.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>


            <div className="container about__container">
                <div className="about__me">
                           <div className="about__me-image">
                                   <img src={GOTH} alt=" About Image" />
                           </div>
                </div>

                <div className="about__content">
                                  <div className="about__cards">
                                          <articule   className="about__card" data-aos="zoom-in">
                                              <FaAward  className="about__icon"/>
                                              <h5>Experience</h5>
                                              <small>2+ years Working</small>
                                          </articule>

                                          <articule   className="about__card" data-aos="zoom-in">
                                              <FiUsers  className="about__icon"/>
                                              <h5>Clients</h5>
                                              <small>20+ Clients Worldwide</small>
                                          </articule>

                                          <articule   className="about__card" data-aos="zoom-in">
                                              <VscFolderLibrary  className="about__icon"/>
                                              <h5>Projects</h5>
                                              <small>10+ Completed</small>
                                          </articule>
                                  </div>

                                  <p>Hello world! I am Eric Muoka, a Freelance Front-end Developer based in Enugu, Nigeria. I am currently looking to transition into game/AR/VR development fulltime droping web & mobile behind. I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly webapps and crossplatform game applications <br/> I am exicted to make the leap and continue refining my skills with the right company. </p>

                                  <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
