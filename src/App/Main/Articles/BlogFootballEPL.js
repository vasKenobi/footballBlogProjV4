import React from 'react'
import {Link} from 'react-router-dom'

import AboutAuthor from './LowSection/AboutAuthor'
import YouMayAlsoLike from './LowSection/YouMayAlsoLike'
import Comments from './LowSection/Comments'
import LeaveReply from './LowSection/LeaveReply'
import Banner from './LowSection/Banner'
import PostSharing from './LowSection/PostSharing'
import Breadcrumbs from './LowSection/Breadcrumbs'

const BlogFootballEPL = () => {
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

                                <h3>No Salah, Firmino or Mane in Liverpool and Manchester City combined XI </h3>

                                <div class="blog-meta big-meta">
                                        <small><Link title="" to="/">08 November, 2019</Link></small>
                                        <small><Link title="" to="/">by Gzhegozh</Link></small>
                                    
                                </div>

                                <PostSharing/>
                            </div>

                            <div class="single-post-media">
                                <img src="images/EPL/LFC_MC_post.png" alt="" class="img-fluid"/>
                            </div>

                            <div class="blog-content">  
                                <div class="pp">
                                    <p>Here we run through the best rated combined XI between Liverpool and Manchester City ahead of their highly anticipated match at Anfield on Sunday. Using Premier League ratings this season, only players with at least five appearances are considered, while injured and suspended players are ineligble.  </p>

                                    <h3><strong>Using Premier League ratings this season, only players with at least five appearances are considered, while injured and suspended players are ineligble.</strong></h3>

                                    <p><strong>Goalkeeper: Adrian (Liverpool) - 6.41 rating</strong><br/>After Manchester City head coach Pep Guardiola ruled out Ederson through injury, Adrian came into the XI by default as neither Alisson nor Claudio Bravo (or Kyle Walker in goal) have made enough appearances to be considered. Adrian generally performed well while Alisson was injured but the 32-year-old will only make the bench at Anfield.   </p>

                                    <p><strong>Right-back: Trent Alexander-Arnold (Liverpool) - 7.41 rating </strong><br/>Trent Alexander-Arnold has picked up from where he left off last season and has already played a direct hand in four goals in 11 league appearances this season (one goal, three assists). Furthermore, only one player has registered as many key passes as the Liverpool right-back in the Premier League this season (40). </p>

                                </div>

                                <img src="images/EPL/LFC_MC_map_post.png" alt="" class="img-fluid img-fullwidth"/>

                                <div class="pp">
                                    <p><strong>Centre-back: Virgil van Dijk (Liverpool) - 7.22 rating </strong><br/>Virgil van Dijk hasn't yet hit the heights of last season but he has still been immense at the back for Liverpool. No defender has won the WhoScored Man of the Match award more times than Van Dijk in the Premier League this season (2) and the Netherlands international has impressively won 77.3% of the aerial duels he has contested in the competition thus far.  </p>

                                    <p><strong>Centre-back: Fernandinho (Manchester City) - 6.92 rating </strong><br/>As Dejan Lovren has not made enough appearances to qualify and Joel Matip is ruled out, Fernandinho takes his spot at centre-back in our combined XI. The Brazil international has been asked to drop into the heart of City's defence as a solution to their injury crisis at the back. The 34-year-old averages the most passes per game of City players available to play on Sunday (73.1). </p>

                                    <p><strong>Left-back: Andrew Robertson (Liverpool) - 7.29 rating </strong><br/>Like Trent Alexander-Arnold, Andrew Robertson has played a direct hand in four goals in 11 Premier League appearances (one goal, three assists) this season. They are arguably the best full-back pairing in the world and handily for Liverpool they play for the same team. The Scotland international excels at both ends of the pitch, averaging 1.7 tackles per game and 1.4 key passes per game. </p>

                                    <p><strong>Central midfield: Kevin De Bruyne (Manchester City) - 8.00 rating  </strong><br/>Kevin De Bruyne has made a rip-roaring start to the season, quickly racking up nine assists in 10 league appearances, at least five more than any other player in the division. The 28-year-old has also scored two goals in the league this term and it's imperative he remains injury free this season for City to have a decent chance of chasing down Liverpool's current six-point lead.  </p>

                                    <p><strong>Central midfield: Fabinho (Liverpool) - 7.02 rating   </strong><br/>Fabinho has developed into an integral player for Liverpool, illustrated by the fact Jurgen Klopp didn't dare risk the 26-year-old against Aston Villa last weekend when a booking would have ruled him out of this match. Only four players have won possession in the middle third more times than Fabinho (51) in the Premier League this season.   </p>

                                    <p><strong>Central midfield: Bernardo Silva (Manchester City) - 7.54 rating </strong><br/>Bernardo Silva may not have rediscovered the same level of form he showed last season but the 25-year-old has still been hugely important for Pep Guardiola's side. Dribbles per game (2.3) are up from last season (1.9) and Silva has still scored four goals and provided two assists from 10 league appearances this season.    </p>


                                    <p><strong>Right wing: Riyad Mahrez (Manchester City) - 7.74 rating </strong><br/>Riyad Mahrez has garnered a hugely impressive rating in the Premier League this season, particuarly when you consider three of his eight appearances have come from the bench. The 28-year-old has played a direct hand in five goals in that time and earned a perfect WhoScored 10 rating in their 8-0 demoliton of Watford in September. He edges Mohamed Salah (7.27) in this position. </p>

                                    <p><strong>Striker: Sergio Aguero (Manchester City) - 7.50 rating </strong><br/>Sergio Aguero has scored nine goals in 10 league appearances this season and sits only one goal behind top scorer Jamie Vardy heading into the weekend's action. The Argentina international has also provided two assists, securing a strong WhoScored rating despite making three substitute appearances this term. He edges Roberto Firmino (7.42) in this position.  </p>
                                </div>
                            </div>

                            <div class="blog-title-area">
                                <div class="tag-cloud-single">
                                    <span>Tags</span>
                                    <small><Link title="" to="/">Liverpool</Link></small>
                                    <small><Link title="" to="/">Man City</Link></small>
                                    <small><Link title="" to="/">Central game</Link></small>
                                    <small><Link title="" to="/">Challenge</Link></small>
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
export default BlogFootballEPL
