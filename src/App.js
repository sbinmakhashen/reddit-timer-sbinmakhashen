import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SubContextProvider from './Context/SubContextProvider';
import Header from './components/Header';
import './layouts/css/main.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Info from './components/Info/Info';
import SubForm from './components/SubredditForm/SubForm';

function App() {
  return (
    <SubContextProvider>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Hero />
              <Info />
            </Route>
            <Route path="/search">
              <SubForm />
            </Route>
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </SubContextProvider>
  );
}

export default App;
