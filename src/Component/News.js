import React from 'react';
import '../styles/News.css';
import {Card} from 'react-bootstrap';


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
        return(
            <div className='news'>
                <div className='container'>
                <Card className='card'>
    <Card.Img variant="top" src={article.urlToImage} className='image'/>
    <Card.Body>
      <Card.Text className='content'>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </Card.Text>
    </Card.Body>
  </Card>
                </div>
            </div>
        )
    }

export default News;