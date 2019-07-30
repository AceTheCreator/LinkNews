import React from 'react';

const Search = () => {
    return(
             <form className='form' onSubmit={()=>this.fetchNews(this.state.currentPage + 0)}>
            <input
        className='search-input'
        type="text"
        placeholder="    Search for news"
        value = {this.state.category}
        onChange = {this.onChange}
        ></input>
        </form>
    )
}

export default Search;