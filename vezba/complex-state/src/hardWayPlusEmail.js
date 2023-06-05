import React, { useState } from "react";

function hardWayPlusEmail() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleContact(event) {
    const {value,name} = event.target;

    setContact(currentValue =>{
        if(name === "fName")
        {
            return{
                fName:value,
                lName:currentValue.lName,
                email:currentValue.email
            }
        }
        else if(name === "lName")
        {
            return{
                fName:currentValue.fName,
                lName:value,
                email:currentValue.email
            }
        }
        else if(name === "email")
        {
            return{
                fName:currentValue.fName,
                lName:currentValue.lName,
                email:value
            }
        }
    })
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input 
            name="fName" 
            placeholder="First Name" 
            onChange={handleContact}
            value={contact.fName}    
        />
        <input 
            name="lName" 
            placeholder="Last Name"
            onChange={handleContact}
            value={contact.lName}
         />
        <input 
            name="email" 
            placeholder="Email" 
            onChange={handleContact}
            value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default hardWayPlusEmail;
