import "../Styling/res.css"
import Desc from "./description";

function Name(){
    return (
        <>
       <marquee behavior="scroll" direction="right" scrollamount="12" > <h1 className="head"><center><u>BS Restaurant</u></center></h1></marquee>
        <Desc/>
        </>
        
    )
}

export default Name;

