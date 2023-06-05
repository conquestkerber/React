import React, {useState} from "react";

function hardWay(){

    const [fullName,setFullName] = useState({
        fName:"",
        lName:""
    });

    function handleFullName(event){
        let newValue = event.target.value;
        let findName = event.target.name;
        console.log(findName)
        
        setFullName(currentValue => {   
            /* currentValue je objekat koji sadrzi trenutne vrenosti za fname i lname 
            console.log(currentValue); */
              if(findName === "firstname"){
                /* proveravamo da li je ime jednako name delu u inputu i taj name property
                je zapravo string pa je neophono navesti ga u zagradi 
                ako jeste vracamo objekat sa novom vrednoscu za fname i trenutnom vrednoscu lname*/
                return {
                fName : newValue,
                lName : currentValue.lName}
                
            }
            /* isti postupak je za lname kao i za fname */
            else if(findName==="lastname"){
                return{
                    fName : currentValue.fName,
                    lName : newValue
                }
            }  
        })

    }
    return (
        <div class="container">
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <form>
                <input name="firstname"
                    placeholder="firstname"
                    onChange={handleFullName}
                    value={fullName.fName} 
                />
                <input name="lastname"
                    placeholder="lastname"
                    onChange={handleFullName}
                    value={fullName.lName}  
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default hardWay;