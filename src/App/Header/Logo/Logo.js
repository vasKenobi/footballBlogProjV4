import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../images/version/blog-football-logo.png'

const Logo = () => {
	return (

        <div className="header-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="logo">
                        <Link to="/"><img src={logo} alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
    )
  }

  export default Logo