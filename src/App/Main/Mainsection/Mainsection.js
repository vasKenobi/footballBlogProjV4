import React from 'react'
import {Route} from 'react-router-dom'
import Popularcategories from './Widgets/Popularcategories'
import Recentposts from './Widgets/Recentposts'
import Sidebarsearch from './Widgets/Sidebarsearch'
import Pagination from './Pagination/Pagination'
import Postlist from './Postlist/Postlist'
import EPL from '../Category/EPL'
import MSL from '../Category/MSL'
import BL from '../Category/BL'
import ContactPage from '../ContactPage/ContactPage'
import Article from '../Articles/Article'
import BlogFootballEPL from '../Articles/BlogFootballEPL'
import BlogFootballMSL from '../Articles/BlogFootballMSL'
import BlogFootballBL from '../Articles/BlogFootballBL'
import BlogFootballEPLKlopp from '../Articles/BlogFootballEPLKlopp'
import BlogFootballEPLLeicester from '../Articles/BlogFootballEPLLeicester'
import BlogFootballEPLTopScorer from '../Articles/BlogFootballEPLTopScorer'
import BlogFootballEPLTopScoreLFC from '../Articles/BlogFootballTopScoreLFC'
import BlogFootballEPLVardy from '../Articles/BlogFootballEPLVardy'



const Mainsection = () => {
    return (

        <section className="section wb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                        {/* <Postlist></Postlist> */}

                        <Route path="/" exact component={Postlist}/>
                        <Route path="/EnglishPL" exact component={EPL}/>
                        <Route path="/MajorSL" exact component={MSL}/>
                        <Route path="/BundesL" exact component={BL}/>
                        <Route path="/Contact" exact component={ContactPage}/>
                        <Route path="/Article" exact component={Article}/>
                        <Route path="/BlogFootballEPL" exact component={BlogFootballEPL}/>
                        <Route path="/BlogFootballMSL" exact component={BlogFootballMSL}/>
                        <Route path="/BlogFootballBL" exact component={BlogFootballBL}/>
                        <Route path="/BlogFootballEPLKlopp" exact component={BlogFootballEPLKlopp}/>
                        <Route path="/BlogFootballEPLLeicester" exact component={BlogFootballEPLLeicester}/>
                        <Route path="/BlogFootballEPLTopScorer" exact component={BlogFootballEPLTopScorer}/>
                        <Route path="/BlogFootballEPLTopScoreLFC" exact component={BlogFootballEPLTopScoreLFC}/>
                        <Route path="/BlogFootballEPLVardy" exact component={BlogFootballEPLVardy}/>
                        

                            
                        </div>

                        <hr className="invis"/>

                        <div className="row">
                            <div className="col-md-12">
                                <Pagination/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="sidebar">
                            <Sidebarsearch/>

                            <Recentposts/>

                            <Popularcategories/>
                        </div>
                    </div>
                </div>
            </div>
        </section>


      

    )
  }

  export default Mainsection