import './App.css';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { MainPage, MainPageMobile } from './components/pages';

function App(props) {
  return (
    <ConnectedRouter history={props.history}>
      <div className="App" data-testid="App">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/mobile" exact component={MainPageMobile} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
}

export default App;

