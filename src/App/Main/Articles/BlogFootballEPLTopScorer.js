import React from 'react'
import {Link} from 'react-router-dom'

import AboutAuthor from './LowSection/AboutAuthor'
import YouMayAlsoLike from './LowSection/YouMayAlsoLike'
import Comments from './LowSection/Comments'
import LeaveReply from './LowSection/LeaveReply'
import Banner from './LowSection/Banner'
import PostSharing from './LowSection/PostSharing'
import Breadcrumbs from './LowSection/Breadcrumbs'

const BlogFootballEPLTopScorer = () => {
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

                                <h3>Top scorer Vardy leapfrogs De Bruyne to top Premier League form rankings</h3>

                                <div class="blog-meta big-meta">
                                        <small><Link title="" to="/">05 November, 2019</Link></small>
                                        <small><Link title="" to="/">Gzhegozh Bzhezh</Link></small>
                                    
                                </div>

                                <PostSharing/>
                            </div>

                            <div class="single-post-media">
                                <img src="images/EPL/Vardy_Top_post.png" alt="" class="img-fluid"/>
                            </div>

                            <div class="blog-content">  
                                <div class="pp">
                                    <p>Jamie Vardy has replaced Kevin De Bruyne at the top of the latest Premier League form rankings leaderboard after scoring for a third game running against Crystal Palace at the weekend. </p>

                                    <p>Having been on a modest three goals after six gameweeks the Leicester hitman has shot up to the top of the scoring charts with his latest strike ensuring he became the first Premier League player to ten goals this season. </p>

                                    <p>Just behind Vardy is clubmate James Maddison, however, who earned a man of the match rating of 8.42 in the victory at Selhurst Park. The playmaker created more chances (eight) than any other Premier League player in gameweek 11, following on from goals against Southampton, Liverpool and Tottenham in recent weeks. </p>

                                </div>

                                <img src="images/EPL/Rating_post.png" alt="" class="img-fluid img-fullwidth"/>

                                <div class="pp">

                                    <p>Last week's leader De Bruyne drops to third after a rare occurence by his standards of not having registered an assist in Manchester City's comeback win over Southampton. </p>

                                    <p>Meanwhile Leicester's impressive form sees the Foxes boast four of the top five spots, with Wilfred Ndidi retaining fourth spot having produced the most tackles over the weekend (eight). Ricardo Pereira drops two places to fifth elsewhere, where teammates Caglar Soyuncu and Youri Tielemans join the leaderboard to make it six from ten as far as Brendan Rodgers side are concerned.</p>

                                    <p>The other main riser this week is Trent Alexander-Arnold, who fittingly marked his 100th Liverpool appearance with yet another assist, climbing 11 places to ninth. Jack Grealish retains his spot in sixth for now having been ruled out of the said match against the league leaders through injury, while Willian is down two places to seventh. </p>

                                </div>
                            </div>

                            <div class="blog-title-area">
                                <div class="tag-cloud-single">
                                    <span>Tags</span>
                                    <small><Link title="" to="/">Liverpool</Link></small>
                                    <small><Link title="" to="/">Man City</Link></small>
                                    <small><Link title="" to="/">Challenge</Link></small>
                                    <small><Link title="" to="/">Possibility</Link></small>
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
export default BlogFootballEPLTopScorer
