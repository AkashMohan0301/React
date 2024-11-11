import React from "react";

const Header = () => {

    const getTheYear = () =>{
        const newdate = new Date();
        return newdate.getFullYear();
        // return newdate.toLocaleDateString();

    }



    return (
        <header>
            <h1>My React Apps</h1>
            <div>
                The Date is {getTheYear()}     
                <p>Sum = {5+5}</p>
                
            </div>
        </header>
    )
}

export default Header;
