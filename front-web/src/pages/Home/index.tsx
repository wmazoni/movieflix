import { ReactComponent as HomeImage } from 'assets/images/main-image.svg'
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import './styles.scss'

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-banner-container">
                <h1>Avalie Filmes</h1>
                <p>Diga o que você achou do seu<br/>filme favorito</p>
                <HomeImage />
            </div>
            <div className="auth-form-container">
                <Switch>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Home;

