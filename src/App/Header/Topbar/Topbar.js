import React from 'react'
import {Link} from 'react-router-dom'

const Topbar = () => {
	return (
      <div className="topbar-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
                        <div className="topsocial">
                            <Link to="/" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></Link>
                            <Link to="/" data-toggle="tooltip" data-placement="bottom" title="Youtube"><i className="fa fa-youtube"></i></Link>
                            <Link to="/" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></Link>
                            <Link to="/" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></Link>
                            <Link to="/" data-toggle="tooltip" data-placement="bottom" title="Flickr"><i className="fa fa-flickr"></i></Link>
                            <Link to="/" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></Link>
                        </div>
                    </div>

                    <div className="col-lg-4 hidden-md-down">
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="topsearch text-right">
                            
                                <form className="form-inline search-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Search on the site"/>
                                    </div>
                                    <button type="submit" className="searchButton"><i className="fa fa-search"></i></button>
                                </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    
    )
  }

  export default Topbar