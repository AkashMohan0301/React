import React from "react";

const Header = () => {

    const getTheYear = () =>{
        const newdate = new Date();
        return newdate.getFullYear();
    }



    return (
        <header>
            <h1>My React Apps</h1>
            <div>
                The Date is {getTheYear()}    
            </div>
        </header>
    )
}

export default Header;
