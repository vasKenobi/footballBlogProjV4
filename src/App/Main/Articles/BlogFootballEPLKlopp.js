import React from 'react'
import {Link} from 'react-router-dom'

import AboutAuthor from './LowSection/AboutAuthor'
import YouMayAlsoLike from './LowSection/YouMayAlsoLike'
import Comments from './LowSection/Comments'
import LeaveReply from './LowSection/LeaveReply'
import Banner from './LowSection/Banner'
import PostSharing from './LowSection/PostSharing'
import Breadcrumbs from './LowSection/Breadcrumbs'

const BlogFootballEPLKlopp = () => {
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

                                <h3>Liverpool vs Manchester: The ultimate 50/1 'Request A Bet'</h3>

                                <div class="blog-meta big-meta">
                                        <small><Link title="" to="/">06 November, 2019</Link></small>
                                        <small><Link title="" to="/">by Gzhegozh</Link></small>
                                    
                                </div>

                                <PostSharing/>
                            </div>

                            <div class="single-post-media">
                                <img src="images/EPL/Klo_Pep_post.png" alt="" class="img-fluid"/>
                            </div>

                            <div class="blog-content">  
                                <div class="pp">
                                    <p>In what is undeniably the biggest game of the 2019/20 Premier League campaign so far Liverpool are aiming to protect their unbeaten record this season against reigning champions Manchester City. </p>

                                    <p>Pep Guardiola's side travel to Anfield hoping to reduce the six-point gap that currently separates the sides and knows that defeat on Sunday could be critical to their title defence. </p>

                                    <p>We've priced up a 'Request A Bet' from SkyBet at a whopping 50/1 that will be sure raise excitement levels ahead of the top of the table clash even higher than they are! </p>

                                </div>

                                <img src="images/EPL/PrevMeet.png" alt="" class="img-fluid img-fullwidth"/>

                                <div class="pp">
                                    <h3><strong>In truth neither side is approaching the weekend's showdown on top form, and the pricing on total goals is perhaps too optimistic in terms of the spectacle as a whole. </strong></h3>

                                    <p>Six league matches have passed since the last time Liverpool scored more than twice in a game (3-1 vs Newcastle), and each of their encounters in that time have seen under 3-5 goals scored. Moreover, City's last four league matches have seen under 3.5 goals, as have each of the last five meetings between these two sides. </p>

                                    <p>Their meeting at Anfield last season was thouroughly underwhelming, ending goalless with just 13 shots in the entire match - only one game in the Premier League saw fewer in 2018/19. While our fingers are crossed that we'll be in for a more entertaining affair this time around, under four goals is our first selection.</p>

                                    <p><strong>REQUEST 1: Under 3.5 goals</strong>The Reds in particular are having to be patient in games of late in the Premier League, with just one of their eight goals across their last five outings coming in the first half. Jurgen Klopp's side have also failed to score in the first half of their last four competitive meetings with City, while the visitors have been uncharacteristically slow out of the blocks themselves recently. The champions have failed to find the net in the first half of three of their last four league matches and the opening stages of such a huge match are sure to be tense. As such a draw at half time could be on the cards for the third successive league match at Anfield between these sides.</p>

                                    <p><strong>REQUEST 2: Draw HT</strong>If the hosts are to find the breakthrough then the most likely candidate to find the net may well be Mohamed Salah, who has relished home comforts this season. While the Egyptian has just a solitary goal away from home in all competitions he's struck seven in as many appearances at Anfield this term. Of his five Premier League goals, four have come after the break as his skillset comes into greater effect as games become stretched and spaces upon behind opposition defences.</p>

                                    <img src="images/EPL/Salah_post.png" alt="" class="img-fluid img-fullwidth"/>

                                    <p><strong>REQUEST 3: Mohamed Salah to score</strong>Our final selection moves away from the goal markets and into bookings, where a seemingly unlikely candidate could offer good value. One of Pep Guardiola's most trusted lieutenants, Bernardo Silva is always called upon to be a nuisance in such big games. While he doesn't find himself in the referees notebook often, his task of disrupting play high up the pitch has landed the Portuguese in hot water in this fixture in particular.</p>
                                </div>
                            </div>

                            <div class="blog-title-area">
                                <div class="tag-cloud-single">
                                    <span>Tags</span>
                                    <small><Link title="" to="/">Liverpool</Link></small>
                                    <small><Link title="" to="/">Man City</Link></small>
                                    <small><Link title="" to="/">Bet</Link></small>
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
export default BlogFootballEPLKlopp
