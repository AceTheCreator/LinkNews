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

const apiKey='bcf19d759fd14f3e8c848c4fa6233cae'
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
    this.setState({ users: data })
    console.log(this.state.users)
   })
}
  
  render(){
  return (
    <div className="App">
<HeaderLink />
<News />
    </div>
  );
}
}

export default App;
