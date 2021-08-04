import React, { Component } from 'react';


class SearchBar extends Component {
    state = {term: ""};

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() { 
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form" action="">
                <div className="field">
                    <h1>Unsplash Gallery Viewer</h1>
                    <label htmlFor=""><span>Look up any image you want directly from Unsplash</span></label>
                    <input  
                    type="text"   
                    value={this.state.term}                
                    onChange={e => this.setState({term: e.target.value})} 
                     />
                </div>
            </form>

        </div>
          );
    }
}
 
export default SearchBar;