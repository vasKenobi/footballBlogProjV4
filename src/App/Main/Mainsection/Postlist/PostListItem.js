import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'




class PostListItem extends Component {
    renderLike(){
        const {
            isLiked,
            addLike,
            removeLike,
            id
        } = this.props;
        if(isLiked) {
            removeLike(id)
        } else {
            addLike(id)
        }
    }


  render(){
      const{
          category,
          urlLink,
          title,
          description,
          date,
          author,
          image,
          id={id},
          isLiked = false,

      }=this.props

    return (
                                <div className="blog-box row">
                                    <div className="col-md-4">
                                        <div className="post-media">
                                                <Link title="" to={urlLink}>
                                                    <img src={image} alt="" className="img-fluid"/>
                                                    <div className="hovereffect"></div>
                                                </Link>
                                        </div>
                                    </div>

                                    <div className="blog-meta big-meta col-md-8">
                                    <button className="likeButton" onClick={()=>this.renderLike()}>
                                        {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                                    </button>

                                    
                                        <span className="bg-aqua"><Link title="" to={urlLink}>{category}</Link></span>
                                        <h4><Link title="" to={urlLink}>{title}</Link></h4>
                                        <p>{description}</p>
                                     
                                        <small><Link title="" to={urlLink}>{date}</Link></small>
                                        <small><Link title="" to={urlLink}>{author}</Link></small>
                                        
                                    </div>
                                </div>
        )
                            
    }
  }

  PostListItem.propTypes = {
      category:PropTypes.string.isRequired,
      title:PropTypes.string.isRequired,
      description:PropTypes.string.isRequired,
      date:PropTypes.string.isRequired,
      author:PropTypes.string.isRequired,
      image:PropTypes.string.isRequired,

  }

  const mapStateToProps = (state,props) => ({
    isLiked: state[props.id]
})

const mapDispatchToProps = (dispatch) => ({
    addLike:(id)=>dispatch({
        type:"LIKE",
        id:id,
    }),
    removeLike:(id)=>dispatch({
        type:"DISLIKE",
        id:id,
    }),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(PostListItem)
