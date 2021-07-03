
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import SearchPage from './SearchPage';
import Recommended from './Recommeded';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
        <Route path="/search">
        <div className="app_page">
         <SideBar />
         <SearchPage/>
     </div>
          </Route>
          <Route path="/">
         
     <div className="app_page">
     <SideBar />
     <Recommended/>
     </div>
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
