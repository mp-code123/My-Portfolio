import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div>
            <section className="qualification section">
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">My Personal Journey</span>


                <div className="qualification__container container">
                    <div className="qualification__tabs">
                        <div className={toggleState === 1 ? "qualification__button qualification__activebutton--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                            <i className="uil uil-graduation-cap qualification__icon "></i>
                            Education
                        </div>
                        <div className={toggleState === 2 ? "qualification__button qualification__activebutton--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                            <i className="uil uil-briefcase-alt qualification__icon"></i>
                            Experience
                        </div>
                    </div>



                    <div className="qualification__sections">
                        <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">B.Tech</h3>
                                    <span className="qualification__subtitle">PSIT, Kanpur</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt"></i>
                                        2023 - Present
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>



                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Python with Django</h3>
                                    <span className="qualification__subtitle">Softpro India</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt"></i>
                                        2021
                                    </div>

                                </div>
                            </div>

                            <div className="qualification__data">
                               
                               <div>
                                   <h3 className="qualification__title">Diploma in Computer Science</h3>
                                   <span className="qualification__subtitle">Government Polytechnic Bighapur</span>
                                   <div className="qualification__calender">
                                       <i className="uil uil-calender-alt"></i>
                                       2019-22
                                   </div>

                               </div>
                               <div>
                                   <span className="qualification__rounder"></span>
                                   <span className="qualification__line"></span>
                               </div>
                           </div>
                           <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Advanced React</h3>
                                    <span className="qualification__subtitle">Coursera</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt"></i>
                                        2023
                                    </div>

                                </div>
                            </div>
                            <div className="qualification__data">
                                
                                <div>
                                    <h3 className="qualification__title">Intermediate</h3>
                                    <span className="qualification__subtitle">Brilliant Academy Inter College</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt"></i>
                                        2019
                                    </div>

                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Python MPC</h3>
                                    <span className="qualification__subtitle">Guvi IITM Research Park</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt"></i>
                                        2023
                                    </div>

                                </div>
                            </div>
                           

                            <div className="qualification__data">

                                <div>
                                    <h3 className="qualification__title">Highschool</h3>
                                    <span className="qualification__subtitle">Brilliant Academy Inter College</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt"></i>
                                        2017
                                    </div>

                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Qualification
