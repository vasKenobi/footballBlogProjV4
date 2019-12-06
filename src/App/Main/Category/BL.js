import React from 'react'
import {Link} from 'react-router-dom'
import Postlist from '../Mainsection/Postlist/Postlist'
import PostListItem from '../Mainsection/Postlist/PostListItem'
import posts from '../Mainsection/Postlist/posts'

const BL = () => {
    return (
        <div>
            <div class="page-title wb">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <h2><i class="fa fa-leaf bg-green"></i> Category by: German Bundesliga</h2>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item"><Link to="/">Blog</Link></li>
                                <li class="breadcrumb-item active">German Bundesliga</li>
                            </ol>
                        </div>                    
                    </div>
                </div>
            </div>

            <div className="blog-list clearfix">

            {
                    posts.filter((item)=>item.categoryId===3).map(({
                        id,
                        category,
                        categoryId,
                        urlLink,
                        title,
                        description,
                        date,
                        author,
                        image
                    })=> (
                        <div key={id}>
                            <PostListItem
                                image={image}
                                category={category}
                                title={title}
                                description={description}
                                date={date}
                                author={author}
                                urlLink={urlLink}
                            />
                            <hr className="invis"/>
                        </div> 
                    ))
                }
                

             </div>

        </div>
    )
}
export default BL
