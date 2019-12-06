import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
	return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-inverse navbar-toggleable-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link class="nav-link color-green-hover" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link class="nav-link color-green-hover" to="/EnglishPL">English Premier League</Link>
                            </li>
                            <li className="nav-item">
                                <Link class="nav-link color-green-hover" to="/MajorSL">USA Major Soccer League</Link>
                            </li>
                            <li className="nav-item">
                                <Link class="nav-link color-green-hover" to="/BundesL">German Bundesliga</Link>
                            </li>
                            <li className="nav-item">
                                <Link class="nav-link color-green-hover" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

    
    )
  }

  export default Navbar