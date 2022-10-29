import React, { useState } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'
import { GiCrossedBones } from 'react-icons/gi'
const Modalservice = () => {

    const [openModal, setOpenModal] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)
   /* const [openModal3, setOpenModal3] = useState(false) */
    return (
         <section className="Modal" id="services">
          <h5>What I Offer</h5>
            <h2>Services</h2>


            <div className="container modal__container">
                <div className="modal__services">
                    <articule className="modal__service">
                 <h3>Web {'\n'} Development</h3>
                 <small onClick={() => setOpenModal(!openModal)}>See more <AiOutlineArrowRight className="modal__icon1"/></small>
                {
                   openModal ?  <div className="modal__overlay" onClick={() => setOpenModal(!openModal)} >
                   <span className="modal__open" data-aos="zoom-in">
               <GiCrossedBones onClick={() => setOpenModal(!openModal)} className="cancel"/>
               <h3>Front end Web Developer</h3>
               <p> I code the Client-side of a web application, convert the design into a real-life application using HTML, CSS and JavaScript. and also ensure responsive and adaptive User Interface</p>
               <ul>
                   <li><AiOutlineCheck className="modal__check"/>Maintenance & Update</li>
                   <li><AiOutlineCheck className="modal__check"/>Coding</li>
                   <li><AiOutlineCheck className="modal__check"/>Analysis</li>
                   <li><AiOutlineCheck className="modal__check"/>Design & Development</li>
               </ul>
           </span>
               </div> : (openModal2 && openModal) === ' '
                }
                    </articule>
                    <articule className="modal__service">
                 <h3>Mobile app {'\n'} Development </h3>
                 <small  onClick={() => setOpenModal2(!openModal2)} >See more <AiOutlineArrowRight className="modal__icon1"/></small>
                {
                     openModal2 &&   <div className="modal__overlay" onClick={() => setOpenModal2(!openModal2)}  >
                         <span  className="modal__open" data-aos="zoom-in">
                     <GiCrossedBones  onClick={() => setOpenModal2(!openModal2)} className="cancel" />
                     <h3> Mobile development</h3>
                     <p>I can create cross-platform mobile apps using react native.</p>
                     <ul>
                         <li><AiOutlineCheck className="modal__check" />Andriod </li>
                         <li><AiOutlineCheck className="modal__check"/>Ios</li>
                         <li><AiOutlineCheck className="modal__check"/></li>
                         <li><AiOutlineCheck className="modal__check"/></li>
                     </ul>
                 </span>
                     </div>
                }
                    </articule>

                  {  <articule className="modal__service">
                 <h3>Game {'\n'} Developement</h3>
                 <small onClick={() => setOpenModal(!openModal)}>See more <AiOutlineArrowRight className="modal__icon1"/></small>
                {
                    openModal && <div className="modal__overlay" onClick={() => setOpenModal(!openModal)}>
                         
                        <span className="modal__open"  >
                    <GiCrossedBones  onClick={() => setOpenModal(!openModal)} className="cancel"/>
                    <h3>Game Developer</h3>
                    <p>I can develop cross platform games </p>
                    <ul>
                        <li><AiOutlineCheck className="modal__check"/>C#</li>
                        <li><AiOutlineCheck className="modal__check"/>C++</li>
                        <li><AiOutlineCheck className="modal__check"/>Unity.</li>
                        <li><AiOutlineCheck className="modal__check"/>Blender.</li>
                    </ul>
                </span>
                    </div>
                }
                    </articule>} 
                </div>
            </div>
         </section>
    )
}

export default Modalservice