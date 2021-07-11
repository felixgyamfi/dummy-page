import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GlobalStyle from './themes/globalStyles';

import Home from './components/pages/Home';
import Test1 from './components/pages/Test Project 1/TestProject1';
import Test2 from './components/pages/Test Project 2/TestProject2';
import Test3 from './components/pages/Test Project 3/TestProject3';

function App() {
  return (
    <Router>
      <GlobalStyle/>
    <div className="App">
      <header className="App-header">
        <h1>
          App
        </h1>
      </header>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Test1" component={Test1}/>
        <Route path="/Test2" component={Test2}/>
        <Route path="/Test3" component={Test3}/>
      <Home />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
