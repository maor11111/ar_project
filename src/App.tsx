import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todaytime from './components/Todaytime.tsx'
import getMaor from './function/printmaor'
import Birthday from './components/Birthday.tsx'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Login from './components/login.tsx'
import ResponsiveAppBar from './components/bar.tsx'
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import Logintotal from './components/logintotal.tsx'
import Tdl from './components/Tdl.tsx'
import Blockchain from './components/Blockchain.tsx'
//import { Switch } from 'react-router'; 



function App() {
  const [count, setCount] = useState(0)

  const maor1 = getMaor();
  console.log(maor1);
  return (
    <>
<div>
  <ResponsiveAppBar/>
  <Router>
  <Routes>
             <Route  path="/login"   Component={Logintotal}/>
             <Route path="/Tdl" Component={ Tdl } />
             <Route path="/thirdpage" Component={ Blockchain }/>
         </Routes>
    </Router>
</div>
</>

  );
}

export default App;
