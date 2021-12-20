import Navbar from 'component/Navbar';
import Home from 'pages/Home';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
