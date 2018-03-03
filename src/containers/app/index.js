import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Admin from '../../components/Admin/Admin';
import './app.css';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/admin" className="admin-link">Admin</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={Admin} />
    </main>
  </div>
);

export default App;
