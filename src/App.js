import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home'
import './App.css'


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={ Home } />
      </Switch>
    </HashRouter>
  );
}

export default App;
