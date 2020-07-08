import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/App.css';
import Index from './components/Index';
import ImageUpload from './components/Image/Upload';

const App = () => {
  return (
    <div className="container">
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={ Index } />
            <Route exact path="/image" component={ ImageUpload } />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
