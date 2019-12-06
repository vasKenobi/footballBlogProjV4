import React from 'react'
import {Link} from 'react-router-dom'

const Popularcategories = () => {
    return (

                            <div className="widget">
                                <h2 className="widget-title">Popular Categories</h2>
                                <div className="link-widget">
                                    <ul>
                                        <li><Link to="/EnglishPL">English Premier League</Link></li>
                                        <li><Link to="/MajorSL">Major Soccer League</Link></li>
                                        <li><Link to="/GermanBL">German Bundesliga</Link></li>
                                    </ul>
                                </div>
                            </div>
                       

      

    )
  }

  export default Popularcategories