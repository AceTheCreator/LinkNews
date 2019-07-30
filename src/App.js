import React, {Component} from 'react';
import './App.css';
import Trending from './Component/News';
import All from './Component/All';


class App extends Component {
  state={
    route:'trending'
  }

  onRouteChange = (route) =>{
    this.setState({route:route})
  }

  render(){
    
    if(this.state.route === 'trending'){
     return<Trending onRouteChange = {this.onRouteChange} />
    }else if(this.state.route === 'all'){
      return <All onRouteChange = {this.onRouteChange} />
    }
  }

}

export default App;
