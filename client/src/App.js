import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';


import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Home from './Components/Home/Home.jsx';
import CountryDetail from './Components/CountryDetail/CountryDetail.jsx';
//import ErrorBundary from './Components/404Comp/ErrorBundary.jsx';
import CreateForm from './Components/CreateForm/CreateForm';
import Comp404 from './Components/404Comp/Comp404.jsx'
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      {/* <h1>Henry Countries</h1> */}
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/countries/:id' render={({match}) => < CountryDetail match={ match }/>}/>      
        <Route exact path='/activities' component={CreateForm}  />
        <Route exact path='/about' component={About}  />
        <Route path='/*' component={Comp404}/>
      </Switch>
      
    </div>
  );
}

export default App;
