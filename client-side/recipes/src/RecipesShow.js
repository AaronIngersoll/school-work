import React from 'react';

export default class RecipesShow extends React.Component {
    
    constructor(props) {
      super(props);
      this.props = props;
      this.state = {id:0}
    }

    componentDidMount = () =>{
        const { match: { params } } = this.props;
        let instate = this.state;
        instate.id = params.id;        
        this.setState(instate);
    }
  
    render() {
      return (
        <div>
          Recipe Title: {this.props.recipes[this.state.id].title}<br/>
          Ingredient 1: {this.props.recipes[this.state.id].i1}<br/>
          Ingredient 2: {this.props.recipes[this.state.id].i2}<br/>
        </div>
      );
    }
}
