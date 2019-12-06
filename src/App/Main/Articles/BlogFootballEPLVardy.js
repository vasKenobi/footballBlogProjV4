import React from 'react'
import {Link} from 'react-router-dom'

import AboutAuthor from './LowSection/AboutAuthor'
import YouMayAlsoLike from './LowSection/YouMayAlsoLike'
import Comments from './LowSection/Comments'
import LeaveReply from './LowSection/LeaveReply'
import Banner from './LowSection/Banner'
import PostSharing from './LowSection/PostSharing'
import Breadcrumbs from './LowSection/Breadcrumbs'

const BlogFootballEPLVardy = () => {
    return (
        <div>
            <Breadcrumbs/>

            <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-title-area">
                            <span class="color-green"><Link title="" to="/EnglishPL">English Permier League</Link></span>

                                <h3>Fanteam Fantasy Football: Vardy to extend top-six record at Arsenal's expense </h3>

                                <div class="blog-meta big-meta">
                                        <small><Link title="" to="/">08 November, 2019</Link></small>
                                        <small><Link title="" to="/">by Gzhegozh</Link></small>
                                    
                                </div>

                                <PostSharing/>
                            </div>

                            <div class="single-post-media">
                                <img src="images/EPL/Fan_Vardy_post_.png" alt="" class="img-fluid"/>
                            </div>

                            <div class="blog-content">  
                                <div class="pp">
                                    <p>Ahead of the final round of Premier League fixtures before the November international break, we are looking to finish with a bang on Fanteam Fantasy Football.  </p>

                                    <p>Remember there are plenty of contests to offer with a variety of cash prizes to win. Fanteam Fantasy Football offer a freeroll contest with a chance of winning a slice of €100 while you can spend €20 to enter a prize pool of €50,000,000! </p>

                                    <p>Not ready to part ways with your own money? Don't worry! Register to Fanteam Fantasy Football through WhoScored.com and new users will be rewarded with a €2 credit to use on a Premier League contest. You could win a portion of €6,500,000 with that! </p>

                                </div>

                                <img src="images/EPL/Fan_Team_Map2.png" alt="" class="img-fluid img-fullwidth"/>

                                <div class="pp">

                                    <p>Unsure who to pick for your XI? We've got you covered again! Now we will go through three of our picks in detail and also release our full XI for everyone to see! </p>

                                    <p><strong>Jamie Vardy (Leicester) - 11.2M </strong><br/>Leicester will aim to take another step towards confirming a top-four berth this season and this weekend and could even head into the international break in second if they beat Arsenal and Liverpool beat Manchester City on Sunday.  </p>

                                    <p>The Foxes are in confident mood at the moment, having won their last three in the league and five of their last six. Brendan Rodgers' side will host an underperforming Arsenal side on Saturday evening and will be disappointed if they don't win.  </p>

                                    <p>Arsenal have only won one of their last six matches in all competitions and have drawn their last four. The Gunners have only won two away games in all competitions this season and are there for the taking for Leicester, particuarly with Jamie Vardy in red hot form. </p>


                                    <p>The 32-year-old is the top scorer in the Premier League this season (10 goals) and has scored seven of those in his last five. Vardy also has a tremendous record against the established top-six sides. In fact, Arsenal is Vardy's favourite opponent in terms of goals scored in his career (eight). </p>
                                    
                                </div>
                            </div>

                            <div class="blog-title-area">
                                <div class="tag-cloud-single">
                                    <span>Tags</span>
                                    <small><Link title="" to="/">Vardy</Link></small>
                                    <small><Link title="" to="/">Striker</Link></small>
                                    <small><Link title="" to="/">Good shape</Link></small>
                                    <small><Link title="" to="/">Leader</Link></small>
                                </div>

                                <PostSharing/>
                            </div>

                            <Banner/>

                            <hr class="invis1"/>

                            <AboutAuthor/>

                            <hr class="invis1"/>

                            <YouMayAlsoLike/>

                            <hr class="invis1"/>

                            <Comments/>

                            <hr class="invis1"/>

                            <LeaveReply/>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>


        </div>
    )
}
export default BlogFootballEPLVardy
