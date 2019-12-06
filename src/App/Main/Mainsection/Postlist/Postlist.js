import React from 'react'

import PostListItem from './PostListItem'
import posts from './posts'


const Postlist = ({
    postsLikeState,
    removeLike,
    addLike,
}) => {
    return (
        <div className="blog-list clearfix">

            {
                    posts.map(({
                        id,
                        category,
                        urlLink,
                        title,
                        description,
                        date,
                        author,
                        image,
                        
                    })=> (
                        <div key={id}>
                            <PostListItem
                                id={id}
                                image={image}
                                category={category}
                                title={title}
                                description={description}
                                date={date}
                                author={author}
                                urlLink={urlLink}
                                isLiked={postsLikeState}
                                removeLike={removeLike}
								addLike={addLike}

                            />
                            <hr className="invis"/>
                        </div> 
                    ))
                }
                

             </div>               

      

    )
  }

  export default Postlist