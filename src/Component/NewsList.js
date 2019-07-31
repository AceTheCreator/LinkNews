import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import FeedModal from './Modal';
import Img from 'react-webp-image';


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
                <Img  webp={photo} alt="news images" className="card-img-top" />;
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
  
export default NewsList;