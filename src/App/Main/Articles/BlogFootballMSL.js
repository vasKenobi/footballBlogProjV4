import React from 'react'
import {Link} from 'react-router-dom'

import AboutAuthor from './LowSection/AboutAuthor'
import YouMayAlsoLike from './LowSection/YouMayAlsoLike'
import Comments from './LowSection/Comments'
import LeaveReply from './LowSection/LeaveReply'
import Banner from './LowSection/Banner'
import PostSharing from './LowSection/PostSharing'
import Breadcrumbs from './LowSection/Breadcrumbs'

const BlogFootballMSL = () => {
    return (
        <div>
            <Breadcrumbs/>

            <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-title-area">
                                <span class="color-green"><Link title="" to="/MajorSL">Major Soccer League</Link></span>

                                <h3>Lodeiro vs Pozuelo: The creative pair central as Seattle meet Toronto</h3>

                                <div class="blog-meta big-meta">
                                        <small><Link title="" to="/">9 November, 2019</Link></small>
                                        <small><Link title="" to="/">Gzhegozh Bzhezh</Link></small>
                                    
                                </div>

                                <PostSharing/>
                            </div>

                            <div class="single-post-media">
                                <img src="images/MSL/lodeiro_post.png" alt="" class="img-fluid"/>
                            </div>

                            <div class="blog-content">  
                                <div class="pp">
                                    <p>It all comes down to this. The 2019 MLS season comes to a head on Sunday night in a repeat of the 2016 MLS Cup final. Three years ago, Seattle Sounders emerged victorious on penalities after the pair had played out a 0-0 draw at BMO Field, with Toronto FC came away from the clash empty handed. They made amends 12 months later as Toronto ran out 2-0 winners at BMO Field.  </p>

                                    <h3><strong>Three years ago, Seattle Sounders emerged victorious on penalities after the pair had played out a 0-0 draw at BMO Field, with Toronto FC came away from the clash empty handed.</strong></h3>

                                    <p>The duo have worked wonders to make it this far and will hope to come away with silverware in Sunday's clash, as both teams play out their third MLS Cup final in the last four years. The Reds were unfortunate not to secure glory three years ago as they dominated proceedings on home turf, mustering 19 shots, seven of which were on target, to the Sounders' three and 54.2% possession.  </p>

                                    <p>Swiss shotstopper Stefan Frei was the WhoScored man of the match in the Sounders' success with a 9.00 rating as he saved all seven shots on target and the 33-year-old is expected to line up between the sticks at CenturyLink Field. However, it's a tale of two creators that could prove decisive in this clash.  </p>

                                </div>

                                <img src="images/MSL/lodeiro_comp_post.png" alt="" class="img-fluid img-fullwidth"/>

                                <div class="pp">
                                    <h3><strong>That said, the Spaniard is Toronto FC's top scorer in MLS this season having netted 14 times in his debut campaign in Major League Soccer. His WhoScored rating as a striker is a commendable 7.59 and he managed four goals and four assists from his nine starts as the spearhead of their attack.  </strong></h3>

                                    <p>That said, the Spaniard is Toronto FC's top scorer in MLS this season having netted 14 times in his debut campaign in Major League Soccer. His WhoScored rating as a striker is a commendable 7.59 and he managed four goals and four assists from his nine starts as the spearhead of their attack. </p>

                                    <p>Pozuelo made quite the impact following his arrival in the league with a 10-out-of-10 showing on his MLS debut as Toronto romped to a 4-0 win over New York City FC to signal his and his club's intentions for the season. Now approaching the MLS Cup final, Pozuelo does so in impressive form having had a direct hand in all but one of his last nine league outings, totalling five goals and four assists. </p>

                                    <p>Crucially, the 28-year-old was named the WhoScored man of the match from the 2-1 win at New York City FC in the quarter-finals, a game he started up front and scored twice in with Pozuelo enjoying playing the Big Apple side.</p>

                                    <p>He'd love nothing more than to wrap up a fine debut campaign with Toronto with a winners' medal around his neck and having earned a WhoScored rating of 7.39, the sixth best in MLS this season, it's fair to say he replaced the departing Sebastian Giovinco and Victor Vazquez with aplomb. </p>

                                    <h3><strong>He'd love nothing more than to wrap up a fine debut campaign with Toronto with a winners' medal around his neck and having earned a WhoScored rating of 7.39, the sixth best in MLS this season, it's fair to say he replaced the departing Sebastian Giovinco and Victor Vazquez with aplomb.  </strong></h3>


                                    <p>It will take a huge effort for Toronto to get the better of Seattle here, however. The Sounders have won nine of their last 14 regular season match ups and four of the last six clashes at CenturyLink Field. </p>

                                    <p>The Reds are unbeaten in 13 league outings coming into this tie, but it what promises to be a nervy finale to another exciting MLS season, it's each side's respective creative stars that could prove key. A drop in performance levels from either Lodeiro or Pozuelo may be ultimately costly in Major League Soccer's showpiece. </p>
                                </div>
                            </div>

                            <div class="blog-title-area">
                                <div class="tag-cloud-single">
                                    <span>Tags</span>
                                    <small><Link title="" to="/">MLS</Link></small>
                                    <small><Link title="" to="/">Cup Final</Link></small>
                                    <small><Link title="" to="/">Season Final</Link></small>
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
export default BlogFootballMSL
