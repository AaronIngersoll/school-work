import React from 'react';

export default class RecipesList extends React.Component {
    constructor(props) {
      super(props);
      this.props = props;
    }
  
    render() {
       return (
           <div>
           {
           Object.keys(this.props.recipes).map((fieldName, x) => {
              let recipe = this.props.recipes[fieldName];
              return(<div>{recipe.title}</div>);    
           })
           }
           </div>
        );
    }
}
