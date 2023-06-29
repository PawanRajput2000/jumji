
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Login from './component/Login';
import SignUP from './component/SignUP';
import ForgetPassword from './component/ForgetPassword';
import ResetPasswordForm from './component/ResetPasswordForm';

import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path ="/" element = {<SignUP/>}/>
      <Route path = "login" element = {<Login/>}/>
      <Route path = "forgetpassword" element = {< ForgetPassword/>} />
      <Route path = "reset-password/:token" element = {<ResetPasswordForm/>} />
      <Route path = "dashboard" element = {<Dashboard/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
