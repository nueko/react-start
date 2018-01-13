import React from 'react';
import Home from './Home';
import About from './About';
import { Link, Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}
