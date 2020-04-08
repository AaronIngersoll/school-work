import React from 'react';

export default class RecipesHome extends React.Component {
    constructor(props) {
      super(props);
      this.props = props;
    }
  
    render() {
        return (
            <div id="welcome" className="h1">Welcome to 
            <span className="app-title">recipesare.fun</span></div>
        );
    }
}
