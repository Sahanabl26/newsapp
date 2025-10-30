import React from 'react'

const NewsItem = (props)=> {
    let {title,description,imageUrl,newsUrl,author,date,source}=props
    return (
      <div className="my-3">
            <div className="card" style={{width:"18rem"}}>
              <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:0}}>
                 <span class=" badge rounded-pill bg-danger" >{source}  
               
                </span>
              </div>
            <img src={!imageUrl?"https://static.politico.com/b3/a4/4f041eac40b0a4395bf70913439c/u-s-congress-94941.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small class="text-body-secondary">By {(!author || author.startsWith("http")) ? "Unknown" : author} on {new Date(date).toGMTString()}

</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
            </div>
      </div>
    )
  }


export default NewsItem
