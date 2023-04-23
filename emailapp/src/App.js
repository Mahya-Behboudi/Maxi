import './App.css';
import Home from './components/Home/Home';
import MainHeader from './components/MainHearder/MainHeader';
import Login from './components/Login/Login';
import React , {useContext} from 'react';
import AuthContext from './components/store/auth-contex';
function App() {
    const ctx = useContext(AuthContext)
    return (  
    <React.Fragment>
            <MainHeader/>
            <main>
              {! ctx.isLoggedIn && <Login />}
              {ctx.isLoggedIn && <Home />}
            </main>
    </React.Fragment>
  );
}

export default App;
