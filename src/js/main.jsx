import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Home/>
//   </React.StrictMode>,
// )

let counter = 0;
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;

setInterval(()=>{

    ReactDOM.createRoot(document.getElementById('root')).render(<Home Second1={counter} Second2={num1} Second3={num2} Second4={num3} Second5={num4} Second6={num5} />);
    counter++;
    if (counter > 9) {
        num1++;
        counter =0;
    }
    if (num1 > 9) {
        num2++;
        num1 =0;
    }
    if (num2 > 9) {
        num3++;
        num2 =0;
    }
    if (num3 > 9) {
        num4++;
        num3 =0;
    }
    if (num4 > 9) {
        num5++;
        num4 =0;
    }
    if (num5 > 9) {
        num6++;
        num5 =0;
    }
},1000)