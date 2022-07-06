import './App.css';
import {MainPage , LinkPage} from "../pages";
import { BrowserRouter as Router , Route , Switch , Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [position , setPosition] = useState(false)

  useEffect(()=>{ 
    setTimeout(()=>{ 
      setPosition(!position)
    } , 5000)
  } , [])

  return (
    <Router>
        <div className="App">   
            <header>
              <MainPage/>
            </header>   
              <Route exact path='/'>
                  <p>Main Page</p>
              </Route>

              <Route exact path="/user">
                {!position ? <Redirect path='/'/> : <LinkPage/>}
              </Route>
        </div>
    </Router>
  );
}

export default App;
