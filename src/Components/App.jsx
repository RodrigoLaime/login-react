import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './login/Login';
import Signup from './signup/Signup';
import Home from './home/Home';

function App() {
  return (
    <HashRouter className="App">
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/home'} element={<Home />} />
        <Route path={'*'} element={<p>Not Fount</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
