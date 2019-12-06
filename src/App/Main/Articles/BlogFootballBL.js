import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

import AboutAuthor from './LowSection/AboutAuthor'
import YouMayAlsoLike from './LowSection/YouMayAlsoLike'
import Comments from './LowSection/Comments'
import LeaveReply from './LowSection/LeaveReply'
import Banner from './LowSection/Banner'
import PostSharing from './LowSection/PostSharing'
import Breadcrumbs from './LowSection/Breadcrumbs'

const BlogFootballBL = ({
    id,
    isLiked,
}) => {
    return (
        <div>
            <Breadcrumbs/>

            <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-title-area">
                            <span class="color-green"><Link to="/BundesL" title="">German Bundesliga</Link></span>

                                <h3>What next for Bayern following Kovac sacking?</h3>

                                <div class="blog-meta big-meta">
                                        <small><Link to="/" title="">5 November, 2019</Link></small>
                                        <small><Link to="/" title="">Gzhegozh Bzhezh</Link></small>
                                    
                                </div>
                                <button className="likeButton">
                                        {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                                </button>

                                <PostSharing/>
                            </div>

                            <div class="single-post-media">
                                <img src="images/BL/Kovac_post.png" alt="" class="img-fluid"/>
                            </div>

                            <div class="blog-content">  
                                <div class="pp">
                                    <p>Niko Kovac could have been sacked 12 months ago. In that sense, then, he has endured a year-long stay of execution. On Sunday evening, the former Croatia international was relieved of his duties at the Allianz Arena after Bayern fell to a 5-1 hammering at the hands of Kovac's former employers Eintracht Frankfurt. It was Bayern's heaviest league defeat since losing to Wolfsburg by the same scoreline in April 2009.  </p>

                                    <p>The loss leaves Bayern just four points off top spot, yet a team of FC Hollywood's stature strives for first. The search, then, is on for Kovac's replacement as Bayern seek a manager who can deliver domestic and, perhaps more importantly, continental glory. His dismissal should have the most recognisable coaches on the continent dusting off their CV and hoping for the call to interview in Bavaria, but who would be best placed to succeed Kovac?  </p>

                                    <p>Given the players at their disposal and the demands to crush all before them, Bayern require a manager to fully realise the immense potential within the squad. That isn't to say Kovac didn't wholly disappoint in Munich, but rather he was the wrong fit for the role in the long run. His Bayern were top scorers in the Bundesliga last season, netting 88 times, while only RB Leipzig (29) shipped fewer goals (32).  </p>

                                </div>

                                <img src="images/BL/BM_charact.png" alt="" class="img-fluid img-fullwidth"/>

                                <div class="pp">

                                    <p>However, it was the manner of the defeat that cost Kovac his job and it means Bayern have already conceded half of last season's Bundesliga total (16) with just 10 of 34 games played. We're unlikely to see the fifth coming of Bayern legend Jupp Heynckes, but that is that such a bad thing? At 74 years of age, Heynckes won't be around forever and it's high time Bayern made a long-term appointment to usher in a new era in Munich.  </p>

                                    <p>Of course, the initial shortlist features experienced pair Ralf Rangnick and Arsene Wenger, who are currently 61 and 70, respectively, with the latter more easily attainable. Rangnick is under contract as the heart of sport and development at Red Bull, but has ample Bundesliga experience having previously managed VfB Stuttgart, Hannover, Schalke and RB Leipzig. </p>

                                    <p>With the present success of Red Bull's European powerhouses Leipzig and Salzburg, Red Bull are unlikely to sanction Rangnick's possible exit lying down as it would strengthen a rival at the detriment of the German and Austrian duo. Wenger, meanwhile, hasn't been in work since his Arsenal exit, yet is held in high regard by the Bayern decision makers, and speaks fluent German. It's possible that a more experienced head to take over the team until the end of the season would be a viable option before a rethink next summer, which would suit Wenger.  </p>

                                    <p>Another out-of-work option has been mooted, too, in the form of Max Allegri, who was been linked with Manchester United and Tottenham. The Italian has spoken of his desire to take a year out of football following his Juventus departure and it could be that Wenger takes over the reins until next year to allow Allegri his sabbatical and have a title-winning coach in charge for the 2020/21 campaign. </p>


                                    <p>That said, Bayern would face extensive competition for his services from Italy and abroad with the 52-year-old held in high esteem across the continent. In being out of work, too, there is no compensation to pay, which makes Allegri an appealing potential appointment for any elite side. That said, the last time Bayern hired an Italian coach, everything went pear-shaped for Carlo Ancelotti and the record Bundesliga champions.  </p>

                                    <p>If Bayern wish to go for the youthful route, then rumours of interest in Erik ten Hag comes as no surprise. The 49-year-old is familiar with Bayern and Munich having managed Bayern Munich II for two years between 2013 and 2015 before returning to the Netherlands to coach Utrecht and then Ajax from 2017 to the present day.  </p>

                                    <p>Any move for Ten Hag is unlikely at the moment and, like Allegri, it could be that Wenger takes charge before the former takes charge. Here, though, is where Bayern must apply caution. Peter Bosz previously impressed as Ajax boss before his 2017 appointment at Borussia Dortmund. He lasted six months before his sacking, so Bayern would be wise to making a hasty appointment off the back of Ten Hag's fine performances as Ajax boss. </p>

                                    <p>There are others not on the rumoured shortlist that Bayern could target, too. Tottenham's Mauricio Pochettino is a possibility given Spurs' underwhelming form and having excelled on the back of his 2014 appointment on a modest budget at the Tottenham Hotspur Stadium, he may be an appealing option for the Bayern hierarchy as they aim to not only get their domestic campaign back on track, but maximise their youth academy.    </p>

                                    <p>A sticking point, though, is that Pochettino only penned a new deal last May and, unlike Wenger and Allegri, would require a hefty compensation package to coax him from north London. An audacious move for Julian Nagelsmann also can't be ruled out either. "Of course I can imagine that someday I will be a coach there (Bayern)," the 32-year-old said back in April, but having moved from Hoffenheim to RB Leipzig earlier this year, the young coach is unlikely to up sticks for Bayern, a move RB Leipzig wouldn't sanction either.   </p>

                                    <p>One man who won't be getting the Bayern role is Jose Mourinho, who remains on the look out for his next project after his dismissal as Manchester United boss last December. The Portuguese manager has routinely be linked with a move to the German powerhouse and even if Uli Hoeness does not want him at Bayern, Mourinho will harbour hopes of a move to Germany before too long.   </p>

                                    <img src="images/BL/BM_stat.png" alt="" class="img-fluid img-fullwidth"/>


                                    <p>"I remember he was always asking me about Bayern and the Bundesliga," former Bayern and Manchester United midfielder Bastian Schweinsteiger recently said. "During our away games there was always Bundesliga on TV. He really knew every player, even from the smaller teams. He was also learning German." That is unlikely to soften Hoeness' stance on Mourinho, with the prickly 56-year-old notriously difficult to work with if his recent managerial record is anything to go by.    </p>

                                    <p>With the Arsenal job possibly becoming available sooner rather than later, Mourinho may elect to bide his time and wait for his chance to rebuild his reputation in England with the Gunners.     </p>

                                    <p>From the players perspective, it was Kovac's negative tactics that ultimately proved his downfall. James Rodriguez and Robert Lewandowski were critical of Kovac and his defensive tactics. Indeed, it was a Bayer Leverkusen mentality that impacted the 48-year-old at Bayern, with the duo, among others, damning of the defensive approach. A team of Bayern's stature should be dominating opponents not looking to sit back, soak up pressure and hit teams on the counter attack.      </p>

                                    <p>Looking ahead, Bayern's upcoming appointment is hugely important and with Der Klassiker looming, Kovac's sacking could have huge implications ahead of the international break. With two failed full-time appointments in the wake of Guardiola's 2016 exit, the pressure is on the board to make it third time lucky as the Bayern boss, but with FC Hollywood boasting the power to poach any top coaching talent, teams with a high profile head coach should be fretting as the Bundesliga champions strive for European success for the first time since 2013.     </p>
                                </div>
                            </div>

                            <div class="blog-title-area">
                                <div class="tag-cloud-single">
                                    <span>Bayern</span>
                                    <small><Link title="" to="/">New coash</Link></small>
                                    <small><Link title="" to="/">Chances</Link></small>
                                    <small><Link title="" to="/">Changes</Link></small>
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

const mapStateToProps = (state, props) => ({
    isLiked : state[props.id]
})

export default connect(
    mapStateToProps
)(BlogFootballBL)

