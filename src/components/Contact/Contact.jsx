import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0ev9hsd', 'template_s6prqo4', form.current, 'iDfth2UBW3VWv5rUn')
      e.target.reset()
  };

    return (
        <div>
            <section className="contact section" id="#contact">
                <h2 className="section__title">Get in Touch</h2>
                <span className="section__subtitle">Contact Me</span>

                <div className="contact__container container grid">
                    <div className="contact__content">
                        <h3 className="contact__title">Talk To Me</h3>
                        <div className="contact__info">

                            <div className="contact__card">
                                <i className="bx bx-mail-send contact__card-icon"></i>
                                <h3 className="contact__card-title">Email</h3>
                                <span className="contact__card-data">mp189461@gmail.com</span>

                                <a href="mailto:mp189461@gmail.com" className="contact__button">Write me  <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                            </div>
                            <div className="contact__card">
                                <i className="bx bxl-whatsapp contact__card-icon"></i>
                                <h3 className="contact__card-title">Whatsapp</h3>
                                <span className="contact__card-data">7310262466</span>

                                <a href="https://wa.me/7310262466" className="contact__button" target="_blank">Write me  <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                            </div>
                            <div className="contact__card">
                                <i className="uil uil-linkedin contact__card-icon"></i>
                                <h3 className="contact__card-title">LinkedIn</h3>
                                <span className="contact__card-data">Manish Prajapati</span>

                                <a href="https://www.linkedin.com/in/me-manish-prajapati" className="contact__button">Write me  <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                            </div>

                        </div>
                    </div>
                    <div className="contact__content">
                        <h3 className="contact__title">Write Me Your Message</h3>

                        <form action="" ref={form} onSubmit={sendEmail} className="contact__form">
                            <div className="contact__form-div">
                                <label htmlFor="" className="contact__form-tag">Name</label>
                                <input type="text" name="name" className="contact__form-input" placeholder="Enter Your Name" />
                            </div>

                            <div className="contact__form-div">
                                <label htmlFor="" className="contact__form-tag">Mail</label>
                                <input type="email" name="email" className="contact__form-input" placeholder="Enter Your Email" />
                            </div>

                            <div className="contact__form-div contact__form-area">
                                <label htmlFor="" className="contact__form-tag">Message</label>
                                <textarea name="project" cols="30" rows="10" className='contact__form-input' placeholder='Write me your Message'></textarea>
                            </div>

                            <button className='button button--flex'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
