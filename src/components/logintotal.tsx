import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Sayhello from './Sayhello'
import Todaytime from './Todaytime.tsx'
import getMaor from '../function/printmaor'
import Birthday from './Birthday.tsx'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Reut from './reut.tsx';
import Login from './login.tsx'
import ResponsiveAppBar from './bar.tsx'



function Logintotal() {
  const [count, setCount] = useState(0)

  const maor1 = getMaor();
  console.log(maor1);
  return (
    <>
<div >
  <div style={{ marginTop: '20px' }}>
  <img src={'../public/qqq.svg'}  />
  </div>
  <Login/>
</div>
    </>
  )
}

export default Logintotal;
