// FUNCTION BASED

import React from 'react'

const NewsItem=(props)=>{
  
  
  
    let { title, description, imageUrl, newsUrl, author, date, source  } = props;
    return (
      <div>
                <div className="card" style={{width: "20rem"}}>
                <span className="position-absolute   badge rounded-pill bg-info text-dark" style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 0}}>{source}</span>
                <img src={!imageUrl?"https://c8.alamy.com/comp/2H73NCE/initial-kp-letter-linked-logo-vector-template-swoosh-letter-kp-logo-design-kp-logo-design-vector-2H73NCE.jpg":imageUrl} //when img is not found put default img
             style={{width: "100%"}} className="card-img-top" alt="..."/>
                    <div className="card-body">                        
                     <h5 className="card-title">{title}...</h5>
                     <p className="card-text">{description}...</p>
                     <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                     <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                 </div>
                </div>
            </div>
    )
  
}

export default NewsItem



