import React, {Component} from 'react';
import './App.css';
import Trending from './Component/News';

class App extends Component {
  state={
    route:'trending',
    component: ''
  }

  onRouteChange = (route) =>{
    if(route === 'trending'){
      this.setState({route:route})
    }else if (route === 'all'){
      import('./Component/All').then((All)=>{
        console.log(All)
        this.setState({route:route, component: All.default})
      })
    }
  }

  render(){
    
    if(this.state.route === 'trending'){
     return<Trending onRouteChange = {this.onRouteChange} />
    }else {
      return <this.state.component onRouteChange={this.onRouteChange} />
    }
  }

}

export default App;
