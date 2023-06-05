import React from 'react'

let date = new Date();
let year = date.getFullYear();
console.log(year);


function Footer(){
    return <p>Copyright {year} </p>
}

export default Footer;