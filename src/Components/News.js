
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired, // Your gnews.io API key
    setProgress: PropTypes.func.isRequired, // The progress bar function
  }

  // Helper function from Code 1
  capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  constructor(props) {
    super(props);
    // State from Code 1
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    // Set document title like in Code 1
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  // updateNews function (like Code 1) but using gnews.io API (from Code 2)
  async updateNews() {
    this.props.setProgress(10);
    // Using gnews.io URL and props
    const url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&max=${this.props.pageSize}&page=${this.state.page}&apikey=${this.props.apiKey}`;
    
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: parsedData.articles || [], // Use gnews.io field
      totalResults: parsedData.totalArticles || 0, // Use gnews.io field
      loading: false,
    });
    this.props.setProgress(100);
  }

  componentDidMount() {
    this.updateNews();
  }

  // fetchMoreData function (from Code 1) but using gnews.io API (from Code 2)
  fetchMoreData = async () => {
    const url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&max=${this.props.pageSize}&page=${this.state.page + 1}&apikey=${this.props.apiKey}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      articles: this.state.articles.concat(parsedData.articles || []),
      totalResults: parsedData.totalArticles || 0,
      page: this.state.page + 1 // Increment page number
    });
  };

  render() {
    // Fallback image from Code 2
    const fallbackImage = "https://via.placeholder.com/300x200?text=News";

    return (
      <div className="container my-3 h-100">
        <h1 className="text-center" style={{ margin: '35px 0px' }}>
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        
        {/* Initial loader from Code 1 */}
        {this.state.loading && <Spinner />}

        {/* InfiniteScroll from Code 1 */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          // Check totalResults (gnews.io)
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {/* Map over articles */}
              {this.state.articles.map((element, index) => (
                <div className="col md-4" key={element.url + index}> {/* Added index to key for safety */}
                  <NewsItem
                    // Using gnews.io fields from Code 2
                    title={element.title ? element.title.slice(0, 45) : ''}
                    description={element.description ? element.description.slice(0, 88) : ''}
                    imageUrl={element.image ? element.image : fallbackImage}
                    newsUrl={element.url}
                    author={element.source?.name || 'Unknown'}
                    date={element.publishedAt}
                    source={element.source?.name || 'Unknown'}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
        
        {/* Previous/Next buttons are removed because 
          InfiniteScroll makes them unnecessary.
        */}
      </div>
    );
  }
}