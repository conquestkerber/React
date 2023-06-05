import React, {useState} from "react";

function easyWay(){

    const [fName,setFistName] = useState("");
    const [lName,setLastName] = useState("");

    function handleFirstName(event){
        setFistName(event.target.value);
    }
    function handleLastName(event){
        setLastName(event.target.value);
    }

    return (
        <div class="container">
            <h1>Hello {fName} {lName}</h1>
            <form>
                <input name="fname"
                    placeholder="firstname"
                    onChange={handleFirstName}
                    value={fName} 
                />
                <input name="lname"
                    placeholder="lastname"
                    onChange={handleLastName}
                    value={lName} 
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default easyWay;