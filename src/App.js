import React, {Component} from 'react';
import HeaderLink from './Component/Header';
import News from './Component/News';
import './App.css';
import axios from 'axios';

const LOAD_STATE = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  LOADING: 'LOADING'
};

const URL = 'https://newsapi.org/v2/top-headlines?apiKey=bcf19d759fd14f3e8c848c4fa6233cae'
class App extends Component {
  state = {
    news:[],
    loadState:LOAD_STATE.LOADING,
    category:'technology',
    source:'',
    country:'us',
    totalResults: 0,
    pageSize: 50,
    page: 1,
}

componentDidMount(){
  this.fetchNews()
}
fetchNews = () =>{
  const url = `${URL}`;
  const {country, pageSize, category} = this.state;
  const options = {
    params:{
      country:country,
      pageSize:pageSize,
      category: category
      
    }
  }
  axios.get(url,options).then(response => response.data)
  .then((data) => {
    this.setState({ 
      news: data ,
      loadState: LOAD_STATE.SUCCESS
    })
   })
   .catch(() => {
    this.setState({ loadState: LOAD_STATE.ERROR });
  });
}

  render(){
  return (
    <div className="App">
<HeaderLink />
{this.state.loadState === LOAD_STATE.LOADING
  ? <div className="loader"></div>
  : <News data={this.state.news} />  
}
    </div>
  );
}
}

export default App;
