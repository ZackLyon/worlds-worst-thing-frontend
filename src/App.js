
import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  NavLink
} from 'react-router-dom';
import ListPage from './ListPage.js';
import CreatePage from './CreatePage.js';
import UpdatePage from './UpdatePage.js';

function App() {
  return (
    <div>
      <Router>
        <header>
          <NavLink activeClassName="active-link" exact to="/">Home</NavLink>
          <NavLink activeClassName="active-link" exact to="/create">Add Quote</NavLink>
        </header>
        <Switch>
            <Route 
                path="/" 
                exact
                render={(routerProps) => <ListPage {...routerProps} />} 
            />
            <Route 
                path="/thingQuotes/:id" 
                exact
                render={(routerProps) => <UpdatePage {...routerProps} />} 
            />
            <Route 
                path="/create" 
                exact
                render={(routerProps) => <CreatePage {...routerProps} />} 
            />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
