import React from 'react'
import {Link} from 'react-router-dom'

import AboutAuthor from './LowSection/AboutAuthor'
import YouMayAlsoLike from './LowSection/YouMayAlsoLike'
import Comments from './LowSection/Comments'
import LeaveReply from './LowSection/LeaveReply'
import Banner from './LowSection/Banner'
import PostSharing from './LowSection/PostSharing'
import Breadcrumbs from './LowSection/Breadcrumbs'

const BlogFootballEPLLeicester = () => {
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

                                <h3>Leicester star triumphs to land PFA gong</h3>

                                <div class="blog-meta big-meta">
                                        <small><Link title="" to="/">04 November, 2019</Link></small>
                                        <small><Link title="" to="/">Gzhegozh Bzhezh</Link></small>
                                    
                                </div>

                                <PostSharing/>
                            </div>

                            <div class="single-post-media">
                                <img src="images/EPL/Leices_post.png" alt="" class="img-fluid"/>
                            </div>

                            <div class="blog-content">  
                                <div class="pp">
                                    <p>Jamie Vardy has landed the PFA Premier League fan's player of the month award. The Leicester striker was exceptional for the high flying Foxes as he scored four times last month, more than any other Premier League player, as Brendan Rodgers' side ended October in the top four. </p>

                                    <p>While he was unable to hit the back of the net in Leicester's 2-1 loss at Liverpool, Vardy hit form with a key strike in a 2-1 win over Burnley and ended October strongly as he yielded a perfect WhoScored 10 rating in the Foxes' astonishing 9-0 win at Southampton and, with an average WhoScored rating of 7.97, was among our shortlist of players to win the individual accolade. </p>

                                    <p>Donec nec metus sed leo sollicitudin ornare sed consequat neque. Aliquam iaculis neque quis dui venenatis, eget posuere felis viverra. Ut sit amet feugiat elit, nec elementum velit. Sed eu nisl convallis, efficitur turpis eu, euismod nunc. Proin neque enim, malesuada non lobortis nec, facilisis et lectus. Ie consectetur. Nam eget neque ac ex fringilla dignissim eu ac est. Nunc et nisl vel odio posuere. </p>

                                    <p>And the public responded as Vardy won 40% of the fan vote, pipping Wolves' Adama Traore to top spot, with the Spaniard returning a 23% of the final vote share. Christian Pulisic (22%), Jack Grealish (9%), David Silva (5%) and Leicester teammate Ricardo Pereira (1%) make up the remaining vote share for the six-man shortltst.  </p>

                                </div>

                                <img src="images/EPL/Vardy_post.png" alt="" class="img-fluid img-fullwidth"/>

                                <div class="pp">

                                    <p>Vardy was one of 18 players submitted to the PFA panel by WhoScored.com for consideration as the official ratings partner of the fans award and was one of five Leicester players to make the 18-man longlist following an impressive October by the top-four chasing Foxes.  </p>

                                    <p>32-year-old Vardy becomes the third player to win the PFA award this season after Norwich star Teemu Pukki and Liverpool centre-back Joel Matip had been voted winners in August and September, respectively. </p>

                                </div>
                            </div>

                            <div class="blog-title-area">
                                <div class="tag-cloud-single">
                                    <span>Tags</span>
                                    <small><Link title="" to="/">Vardy</Link></small>
                                    <small><Link title="" to="/">Top Scorer</Link></small>
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
export default BlogFootballEPLLeicester
