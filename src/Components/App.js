import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './login/Login';
import Signup from './signup/Signup';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
