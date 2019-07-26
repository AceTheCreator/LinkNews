import React, {useState} from 'react';
import '../styles/News.css';
import {Card, Button} from 'react-bootstrap';
import FeedModal from './Modal';


const News = ({ data }) => {
    var items = data.articles.map(articles => <NewsList key={Math.random()} article={articles}/>);
    console.log(data)
    return (
      <div className="grid">
        { items }
      </div>
    )
  }

  const NewsList = ({article}) =>{
    const [modalShow, setModalShow] = React.useState(false);
    const ts = new Date(`${article.publishedAt}`)
    const date = ts.toDateString();
    let author = article.author ? article.author : 'Unknown'
        return(
            <div className='news'>
                <div className='container'>
                <Card className='card'>
    <Card.Img variant="top" src={article.urlToImage} className='image'/>
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

export default News;