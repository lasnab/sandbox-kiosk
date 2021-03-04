import { useState, useEffect } from 'react';
import './global-styles/App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Studio from './components/Studio/Studio';
import Info from './components/Info/Info';
import Reserve from './components/Reserve/Reserve';
import AllTools from './components/AllTools/AllTools'
import ToolPage from './components/ToolPage/ToolPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { tool_response } from './temporary.js'

/*
 * Available Studios:
 * 1246 - Electronics
 * 1242 - Crafting and Sewing
 * 1224 - Woodworking
 * 1222 - CNC
*/

function App() {
  const [id, setId] = useState('1224')
  const [studio, setStudio] = useState('Woodworking')
  const [alltools, setAlltools] = useState(tool_response)

  useEffect(() =>{
    fetch(`http://127.0.0.1:5000/alltools?studio-id=${id}`)
    .then(response => response.json())
    .then(alltools => setAlltools({alltools}))
    console.log('Sent GET Request')
  }, [id])
 
    // const { studio, alltools } = this.state
    return !alltools.length ?
      <h1>Loading Resources</h1> :
      (
        <BrowserRouter basename="/sandbox-kiosk">
          <div className='app'>
            <Switch>
              <Route path='/tool'><ToolPage /></Route>
              <Route path='/studio'><Studio studio={studio} /></Route>
              <Route path='/info'><Info studio={studio} studio_wiki='https://wiki.umiacs.umd.edu/sandbox/index.php/IRB_1224#Woodworking_Studio.'/></Route>
              <Route path='/reserve'><Reserve reserve_url='https://docs.google.com/forms/d/e/1FAIpQLSeaHxnBaZCDpPZFkRcImh89JPcGiTAyzz7_yFC6a9MhWpWK2A/viewform?embedded=true'/></Route>
              <Route path='/alltools'><AllTools alltools={alltools}/></Route>
              <Route path='/'><Home studio={studio}/></Route>
            </Switch>
            <Footer studio={studio} />
          </div>
        </BrowserRouter>
      );

}

export default App;
