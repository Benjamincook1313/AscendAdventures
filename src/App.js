import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import './App.css'


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={ Home } />
        {/* <Route path='/Cart' /> */}
        {/* <Route path='/Inventory' /> */}
      </Switch>
    </HashRouter>
  );
}

export default App;
