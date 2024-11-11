
import React,{Component} from "react";


    // Class based Components  in class we works with properties an methods

    // let styles = {
    //     h1: {
    //     background : "#03a9fa",
    //     color: "#000000",
    //     padding: "10px",
    //     fontFamily:'Anton',
    //     textAlign: 'center'
        
    //     },
    //     input: {
    //         width: "100%"
    //     }
    // }

    class Header extends Component {


        render(){
            return (
              
                    <React.Fragment>
                    

                          
                    <h1 className="logo">Welcome</h1>
                    <div className="inputs">
                        Input : 

                        <input type="text" />
                        
                    </div>

                    </React.Fragment>
               
            )
        }

    }
    



export default Header;
