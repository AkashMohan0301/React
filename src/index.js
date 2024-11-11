import React from "react";
import ReactDOM from "react-dom"; // to conect index.html file with react component classes 

import Header from "./components/header";

// react component
const App = () => {

// Always return 
// return React.createElement('h1',{className: 'title'},'Hello world!') 
// return React.createElement('h1',{className: 'title'},React.createElement('p',{className: 'sub'},'Hello')) write this way sucks!!

return (

/* <React.Fragment>

    <h1 className="title">Hello world!</h1>
    <p className="sub">Hello</p>
    <h1>Hello</h1>
    <p>Hello</p>
</React.Fragment> */

<div>
    <Header></Header>
</div>

)
}

ReactDOM.render(<App/>,document.getElementById('root'))