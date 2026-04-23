import './App.css';
import pandoraImg from './assets/YOUTUBE.webp'; 

function App() {
  return (
    <div className="page-container">
      
      <div className="image-side" style={{ backgroundImage: `url(${pandoraImg})` }}>
      </div>

      
      <div className="form-side">
        <div className="login-box">
          <div className="logo-placeholder">
          
            <h1 className="brand-logo">YOUTUBE</h1>
          </div>

          <h3>Fazer login</h3>

          <div className="input-group">
            <label>Login</label>
            <input type="text" placeholder="Digite seu login..." />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha..." />
          </div>

          <button className="btn-entrar">ENTRAR</button>

          <a href="#" className="forgot-link">Esqueci meu login ou senha</a>
        </div>
      </div>
    </div>
  );
}

export default App;