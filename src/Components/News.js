// FUNCTION BASED 
import NewsItem from "./NewsItem";
import React, { useState , useEffect } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{
  
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  

    const NewsData=async()=>{
        props.setProgress(10);
        try{
          
          const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
          setLoading(true)
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
          props.setProgress(30);
          setArticles(data.articles)
          setTotalResults(data.totalResults)
          setLoading(false)
          props.setProgress(50);
      }
      catch(e){
       console.log(e);
      }
      props.setProgress(100);
      }

      useEffect(() => {
        document.title = `${props.category}-KP-News`;
        NewsData();
      }, [])
      

      
     const fetchMoreData=async()=>{
      try{
          const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pagesize}`;
          setLoading(true)
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
          setArticles(articles.concat(data.articles))
          setTotalResults(data.totalResults)
          setLoading(false)
          setPage(page+1)
      }
    
      catch(e){
       console.log(e);
      }
     };
    
                 

 
    return (
      <>
        <h2 className="text-center" style={{margin: '54px 0px'}}>KP-NEWS &rarr; Top {props.category} Headline</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container my-3">
        <div className="row">
        {articles.map((element)=>{
            return <div className="col md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={!element.author?"unknown":element.author} date={element.publishedAt}
                 source={!element.source.name?"unknown":element.source.name}/>
          </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
            <button disabled={page<=1} type="button" className="btn btn-info" onClick={handlePrevClick}>&larr; Previous</button>
            <button disabled={page+1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-info" onClick={handleNextClick}>Next &rarr;</button>
        </div> */}
      
      </>
    )
}
News.defaultProps = {
  country: 'in',
  category: 'general',
  pagesize: 9,
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pagesize: PropTypes.number,
}

export default News;


