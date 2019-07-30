import React, {Component} from 'react';
import './App.css';
import Trending from './Component/News';
import AsyncComponent from './Component/AsyncComponent';

class App extends Component {
  state={
    route:'trending',
    component: null
  }

  onRouteChange = (route) =>{
      this.setState({route:route})
  }

  render(){
    
    if(this.state.route === 'trending'){
     return<Trending onRouteChange = {this.onRouteChange} />
    }else if (this.state.route === 'all'){
      const AsyncAllNews = AsyncComponent(()=> import('./Component/All'))
      return <AsyncAllNews onRouteChange = {this.onRouteChange} />
    }
  }

}

export default App;
