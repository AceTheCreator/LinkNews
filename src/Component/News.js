import React, {useState, Component} from 'react';
import '../styles/News.css';
import {Card, Button,Container, Navbar, Nav} from 'react-bootstrap';
import FeedModal from './Modal';
import Pagination from './Pagination';
import QuickLinks from './QuickLinks';
import request from 'superagent';
import search from '../Component/static/search.png';
import logo from '../Component/static/logo.png';

const LOAD_STATE = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  LOADING: 'LOADING'
};

const URL = 'https://newsapi.org/v2/top-headlines?apiKey=bcf19d759fd14f3e8c848c4fa6233cae'
class Trending extends Component {
  state = {
    news:[],
    loadState:LOAD_STATE.LOADING,
    category:'technology',
    source:'',
    country:'us',
    totalResults: 0,
    pageSize: 5,
    currentPage: 1,
}

componentDidMount(){
  this.fetchNews(this.state.currentPage)
}
fetchNews = (page) =>{
  const url = URL;
  const {country, pageSize, category} = this.state;
  const option = page
  request.get(url)
  .query({ country: country, category: category, pageSize: pageSize, page:option})
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

onChange = e => {
  this.fetchNews(this.state.currentPage)
  this.setState({
    category: 'sport'
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
      <Nav.Link href="All"><div onClick={() => this.props.onRouteChange('all')}>All</div></Nav.Link>
      <Nav.Link href="Sources">Sources</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <Navbar.Brand href="#home" id='logo'><img src={logo} alt='logo' /></Navbar.Brand>
  <img src={search} alt='search' />
  </Container>
</Navbar>
      <QuickLinks
onClick = {this.onChange}
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
        <h4>{data.totalResults} news discovered</h4>
        </Container>
      </div>
    )
  }
  
  const NewsList = ({article}) =>{
    const [modalShow, setModalShow] = useState(false);
    const ts = new Date(`${article.publishedAt}`)
    const date = ts.toDateString();
    let author = article.author ? article.author : 'Unknown'
    let photo = article.urlToImage ? article.urlToImage : 'https://www.reynoldsam.com/wordpress/wp-content/themes/ram/_images/nophoto.jpg';
        return(
            <div className='news'>
                <div className='container'>
                <Card className='card'>
    <Card.Img variant="top" src={photo} className='image'/>
    <Card.Body>
      <Card.Text className='title'>
      {article.title}
      </Card.Text>
      <Card.Text className='content'>
        {article.description}<br />
        posted by {author} on {date}
      </Card.Text>
      <Button className='read-more' onClick={() => setModalShow(true)}>Read More</Button>
      <FeedModal
      content ={article}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Card.Body>
  </Card>
                </div>
            </div>
        )
    }

export default Trending;