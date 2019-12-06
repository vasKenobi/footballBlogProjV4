import React from 'react'

const ContactPage = () => {
    return (
        <div>
            <section class="section wb">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="page-wrapper">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <h4>About Gzhegozh</h4>
                                        <p>Gzhegozh Bzhezhizhchekevich is  famous football expert.</p>
                                    </div>

                                    <div class="col-lg-4">
                                        <h4>How Gzhegozh helps?</h4>
                                        <p>Gzhegozh writes interesting articles and makes interesting forecasts. </p>
                                    </div>

                                    <div class="col-lg-4">
                                        <h4>Gzhegozh can help with forecasts</h4>
                                        <p>You can ask Gzhegozh about any match and he will provide you with a detailed preview.</p>
                                    </div>
                                </div>

                                <hr class="invis"/>

                                <div class="row">
                                    <div class="col-lg-8 offset-lg-2">
                                        <form class="form-wrapper">
                                            <input type="text" class="form-control" placeholder="Your name"/>
                                            <input type="text" class="form-control" placeholder="Email address"/>
                                            <input type="text" class="form-control" placeholder="Phone"/>
                                            <input type="text" class="form-control" placeholder="Subject"/>
                                            <textarea class="form-control" placeholder="Your message"></textarea>
                                            <button type="submit" class="btn btn-primary">Send <i class="fa fa-envelope-open-o"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ContactPage
