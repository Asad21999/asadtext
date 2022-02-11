
import './App.css';
import React,{useState} from 'react';
import Navbar from 'components/Navbar';
import TextForm from 'components/TextForm';
import About from 'components/About';
import Alert from 'components/Alert';
import {
    BrowserRouter as Router,
   
    Route,
    Link,
    Switch
  } from "react-router-dom";
  

function App() {
    const [mode,setMode]=useState('light')
    const toggleMode=()=>{
        if(mode==="light"){
            setMode('dark')
            document.body.style.backgroundColor="grey"
            let myBox= document.getElementById('myBox')
            myBox.style.backgroundColor='grey'

            showAlert("dark mode has been activated", "success")
        }
        else{
        setMode('light')
        document.body.style.backgroundColor="white"
        let myBox= document.getElementById('myBox')
        myBox.style.backgroundColor='white'
        showAlert("light mode has been activated", "success")
    
        }
       
    }
    const [alert, setAlert]=useState(null)
    const showAlert=(message, type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(()=>{
            setAlert(null)

        },1500)

    }
    return ( 
    <>
    <Router>
    <Navbar toggleMode={toggleMode} title="TextUtils"  mode ={mode}/>
    <Alert alert={alert} />
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
         
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading={"Enter Text"}   mode={mode}/>
          </Route>
        </Switch>
        
    </div>
   </Router>
    </>
    );
}

export default App;