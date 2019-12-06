import React from 'react'
import {Link} from 'react-router-dom'

import AboutAuthor from './LowSection/AboutAuthor'
import YouMayAlsoLike from './LowSection/YouMayAlsoLike'
import Comments from './LowSection/Comments'
import LeaveReply from './LowSection/LeaveReply'
import Banner from './LowSection/Banner'
import PostSharing from './LowSection/PostSharing'
import Breadcrumbs from './LowSection/Breadcrumbs'

const BlogFootballEPLTopScoreLFC = () => {
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

                                <h3>Fanteam Fantasy Football: Liverpool fringe players to watch out for against Genk </h3>

                                <div class="blog-meta big-meta">
                                        <small><Link title="" to="/">07 November, 2019</Link></small>
                                        <small><Link title="" to="/">by Gzhegozh</Link></small>
                                    
                                </div>

                                <PostSharing/>
                            </div>

                            <div class="single-post-media">
                                <img src="images/EPL/LFC_post.png" alt="" class="img-fluid"/>
                            </div>

                            <div class="blog-content">  
                                <div class="pp">
                                    <p>We are now entering the business stage of the Champions League group stage and teams will start to discover their fate. The next three gameweeks will determine who qualifies for the knockout stage, who drops into the Europa League and who falls out of European competition altogether.  </p>


                                    <p>We have picked out Fanteam Fantasy Football XI for Tuesday's matches with that in mind and are kindly even going to show you our selections. Unsure which contest to enter? There are different tiers to accomodate all users. A €2 buy-in will give you the chance to win a slice of €1,250,00, while a €5 buy-in increases the prize pool to €2,500,00. Feeling confident? Why not enter the €20 contest and go for the €10,000,00 jackpot! Sign-up here and get involved now! </p>

                                    <p><strong>Arkadiusz Milik (Napoli) - 11.3M </strong><br/>Napoli host Salzburg on Tuesday night in what should be a thoroughly entertaining match. Salzburg have conceded the most goals in the group stage (11) but that is misleading as they have given Napoli and Liverpool tough games already this season. </p>


                                    <p>Nevertheless, it's hard to ignore the red hot form of Napoli striker Arkadiusz Milik, who has scored in each of his last five matches for club and country. The Poland international has netted six goals in that time and picked up the WhoScored Man of the Match award on three occasions.  </p>

                                </div>

                                <img src="images/EPL/FatTeam_post.png" alt="" class="img-fluid img-fullwidth"/>

                                <div class="pp">
                                    <p><strong>Alex Oxlade-Chamberlain (Liverpool) - 13.5M  </strong><br/>It would be a surprise if Jurgen Klopp picked his strongest team on Tuesday night with Sunday's Premier League clash with Manchester City looming fast. Some of Liverpool's fringe players should therefore get the chance to impress at home to Genk in midweek. </p>

                                    <p>Alex Oxlade-Chamberlain has performed well when called upon this season and should build on his good form against Genk. The England international has scored three goals in his last two starts for Liverpool, which includes a brace against Genk in the reverse match. He was also the WhoScored Man of the Match in Liverpool's 4-1 win in Belgium.  </p>

                                    <p><strong>Memphis Depay (Lyon) - 10.8M </strong><br/>Lyon are still trying to discover their best form under new manager Rudi Garcia and head into Tuesday's match with Benfica needing three points to bolster their chances of a top two finish. </p>

                                    <p>One tactical change Garcia has made is deploying a 4-4-2 formation with Memphis Depay closer to goal and two recongised central midfielders on the wing. Memphis has responded well with four goals in his last three outings for Lyon and WhoScored Man of the Match displays in each game. </p>

                                    
                                </div>
                            </div>

                            <div class="blog-title-area">
                                <div class="tag-cloud-single">
                                    <span>Tags</span>
                                    <small><Link title="" to="/">Liverpool</Link></small>
                                    <small><Link title="" to="/">Man City</Link></small>
                                    <small><Link title="" to="/">Challenge</Link></small>
                                    <small><Link title="" to="/">Central game</Link></small>
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
export default BlogFootballEPLTopScoreLFC
