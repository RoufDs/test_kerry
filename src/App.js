import './App.css';

import { Routes, Route } from 'react-router-dom';

import Logo from './components/logo/Logo.component';
import SignUp from './components/sign-up/SignUp.component';
import Welcome from './components/welcome/Welcome.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Logo />}>
        <Route index element={<Welcome />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
