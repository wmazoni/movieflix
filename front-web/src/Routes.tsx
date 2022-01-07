import Navbar from 'component/Navbar';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies" exact>
        <Catalog />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
