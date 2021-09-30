
import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import ListPage from './ListPage.js';
import DetailPage from './DetailPage.js';

function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route 
                path="/" 
                exact
                render={(routerProps) => <ListPage {...routerProps} />} 
            />
            <Route 
                path="/thingQuotes/:id" 
                exact
                render={(routerProps) => <DetailPage {...routerProps} />} 
            />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
