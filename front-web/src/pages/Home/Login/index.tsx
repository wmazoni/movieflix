import ButtonIcon from 'component/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.scss';

const Login = () => {
  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      <form>
        <div className="form-container">
          <div className="mb-4">
            <input
              type="text"
              className="form-control base-input"
              placeholder="Email"
              name="username"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              className="form-control base-input "
              placeholder="Senha"
              name="password"
            />
          </div>
          <div className="login-submit">
            <ButtonIcon text="Fazer login" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
