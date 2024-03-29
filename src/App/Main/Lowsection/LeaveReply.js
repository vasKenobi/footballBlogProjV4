import React from 'react'

const LeaveReply = () => {
    return (
                    <div class="custombox clearfix">
                                <h4 class="small-title">Leave a Reply</h4>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <form class="form-wrapper">
                                            <input type="text" class="form-control" placeholder="Your name"/>
                                            <input type="text" class="form-control" placeholder="Email address"/>
                                            <input type="text" class="form-control" placeholder="Website"/>
                                            <textarea class="form-control" placeholder="Your comment"></textarea>
                                            <button type="submit" class="btn btn-primary">Submit Comment</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
    )
}
export default LeaveReply
