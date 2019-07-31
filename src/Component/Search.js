import React, {Component} from 'react';
import '../styles/Search.css';
import searchIcon from './static/search.png';

const changeSearchField = 'Search';

class Search extends Component{
    state = {
        iconShow : false
    }
    
    HandleIcon = () =>{
       this.setState({
           iconShow : true
       })
    }
    render(){
        let icon;
        if(this.state.iconShow){
            icon =
            <form className='form' onSubmit={this.props.searchHandler}>
            <input
            arial-label='search news'
        className='search-input'
        type="text"
        placeholder={changeSearchField}
        value = {this.props.query}
        onChange = {this.props.onQueryChange}
    
        ></input>
        </form>
        }else{
            icon = <img src={searchIcon} alt='search' onClick={this.HandleIcon}/>
        }
        return(
            <div>{icon}</div>
        )
    }

}

export default Search;