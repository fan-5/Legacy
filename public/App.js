import React from 'react';
// import ReactDOM from 'react-dom'
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom';
import Food from '../src/components/food.jsx';
// import Err from './components/404Page.jsx';
import Navgation from '../src/components/Nav.jsx';
import Login from '../src/components/login.jsx';
import register from '../src/components/registered.jsx';
import ThankYouPage from '../src/components/ThankYouPage.jsx';
import WeclomePage from '../src/components/WelcomePage.jsx';




class App extends React.Component {

render(){
  return (
    
    <div className="App">
     <BrowserRouter>
      <Navgation/>    
      <Route path="/" component={WeclomePage} exact />    
      <Route  path="/Home" component={Food} exact />
        <Route  path="/login" component={Login} exact /> 
        <Route  path="/registered" component={register} exact />
        <Route path="/ThankYouPage" component={ThankYouPage} exact />    
     </BrowserRouter>
      </div>
  );
  }
}

export default App;