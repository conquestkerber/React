import React, { useState } from "react";

function hardWayPlusEmailOptimised() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleContact(event) {
    const {value,name} = event.target;

    setContact(currentValue =>{
        return{
            ...currentValue,
            [name]:value
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

export default hardWayPlusEmailOptimised;
