import React, { Component} from 'react';
import '../styles/News.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
import Pagination from './Pagination';
import QuickLinks from './QuickLinks';
import request from 'superagent';
import search from '../Component/static/search.png';
import logo from '../Component/static/logo.png';
import NewsList from './NewsList';

const LOAD_STATE = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  LOADING: 'LOADING'
};

const URL = 'https://newsapi.org/v2/everything?apiKey=bcf19d759fd14f3e8c848c4fa6233cae'
class Trending extends Component {
  state = {
    news:[],
    loadState:LOAD_STATE.LOADING,
    q: 'technology',
    totalResults: 0,
    pageSize: 5,
    currentPage: 1,
}

componentDidMount(){
  this.fetchNews(this.state.currentPage)
}
fetchNews = (page) =>{
  const url = URL;
  const {pageSize, q} = this.state;
  const option = page
  request.get(url)
  .query({ q:q, page:option, pageSize:pageSize })
  .set('Accept', 'application/json')
  .end((error, response) => {
      if (!error && response) {
          this.setState({
             news: response.body,
             loadState : LOAD_STATE.SUCCESS,
             totalResults : response.body.totalResults,
             currentPage : page
             });
          console.log(this.state.news)
      } else {
          console.log('There was an error fetching from News.org', error);
      }
  }
);
}

onChangeSport = e => {
    this.fetchNews(this.state.currentPage)
    this.setState({
      q: 'sport'
    })
    console.log('state changed')
  }
  onChangeBusiness = e => {
    this.fetchNews(this.state.currentPage)
    this.setState({
      q: 'business'
    })
    console.log('state changed')
  }
render(){
  return (
    <div className="Trending">
    <Navbar sticky="top"  collapseOnSelect expand="lg" className='nav'>
    <Container>
  <Navbar.Toggle id='toggle'/>
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link><div onClick={() => this.props.onRouteChange('trending')}>Trending</div></Nav.Link>
      <Nav.Link><div>All</div></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <Navbar.Brand href="#home" id='logo'><img src={logo} alt='logo' /></Navbar.Brand>
  <img src={search} alt='search' />
  </Container>
</Navbar>
      <QuickLinks
sport = {this.onChangeSport}
business = {this.onChangeBusiness}
 />

{this.state.loadState === LOAD_STATE.LOADING
  ? <div className="loader"></div>
  : <News data={this.state.news} />  
}
  <Pagination
          current={this.state.currentPage}
          total={this.state.totalResults} 
          pageSize={this.state.pageSize} 
          onPageChanged={this.fetchNews}
        />
    </div>
  );
}
}


const News = ({ data }) => {
    var items = data.articles.map(articles => <NewsList key={Math.random()} article={articles}/>);
    return (
      <div className="grid">
        { items }
        <Container>
        <h6>{data.totalResults} news discovered</h6>
        </Container>
      </div>
    )
  }
  

export default Trending;