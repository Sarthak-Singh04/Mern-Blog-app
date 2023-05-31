
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import Post from './Pages/Post';
import Loginpage from './Pages/Loginpage';
import Signup from './Pages/Signup';


function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Post />} />
        <Route path={'/login'} element={<Loginpage />}/>
       <Route path={'/signup'} element={<Signup/>}/>

      </Route>



    </Routes>



  );
}

export default App;
