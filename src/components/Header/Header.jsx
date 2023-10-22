import React ,{useState} from 'react'
import './header.css'

const Header = () => {
    const [Toggle,showMenu] = useState(false)


    return (
        <div>
            <header className='header'>
                <nav className="nav container">
                    <a href="index.html" className='nav__logo'>Manish</a>

                    <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="#home" className='nav__link active-link'>
                                    Home
                                    <i className="uil uil-estate nav__icon"></i>

                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className='nav__link'>
                                    About
                                    <i className="uil uil-user nav__icon"></i>

                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#skills" className='nav__link'>
                                    Skills
                                    <i className="uil uil-file-alt nav__icon"></i>

                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" className='nav__link'>
                                    Portfolio
                                    <i className="uil uil-scenery nav__icon"></i>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className='nav__link'>
                                    Contact
                                    <i className="uil uil-message nav__icon"></i>
                                </a>
                            </li>
                        </ul>

                        <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                    </div>
                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                        <i className="uil uil-apps"></i>

                    </div>
                </nav>
            </header>


        </div>
    )
}

export default Header
