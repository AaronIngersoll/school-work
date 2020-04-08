import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import RecipesList from './RecipesList.js';
import RecipesHome from './RecipesHome.js';
import RecipesShow from './RecipesShow.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { 
     recipes: [
      {id:0, title:'Lemon bars', i1:'butter', i2:'sugar'}, 
      {id:1, title:'Chocolate chip cookies',i1:'flour', i2:'sugar'}, 
      {id:2, title:'Bagels', i1:'flour', i2:'water'}, 
      {id:3, title:'Lentil soup', i1:'lentils', i2:'water'}, 
      {id:4, title:'Peanut butter bars', i1:'peanut butter', i2:'sugar'}
     ]};
   }
 
   renderBody = () =>{
    return(
      <Router>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-brand mb-0 h1">Dan'sRecipes</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to={'/'}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/listrecipes'}>List Recipes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/showrecipe/0'}>Show Recipe</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path='/listrecipes'>
          <RecipesList recipes={this.state.recipes}></RecipesList>
        </Route>
        <Route exact path='/showrecipe/:id' render={(props) => <RecipesShow {...props}  recipes={this.state.recipes}/>} />
        <Route exact path='/'>
          <RecipesHome></RecipesHome>
        </Route>
      </Switch>
    </Router>      
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderBody()}
      </div>
    );
  }
}


export default App;
