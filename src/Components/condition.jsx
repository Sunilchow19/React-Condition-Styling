import Mens from "./mens"
import Jewel from "./jewel"
import Womens from "./womens"
import Elec from "./elec"

import "../Styling/table.css"

let category="mens"
let com=""

switch(category){
    case "mens":
        com=<Mens/>
        break;
    case "womens":
        com=<Womens/>
        break;
    case "jewel":
        com=<Jewel/>
        break;
    case "elec":
        com=<Elec/> 
        break;
}

function Condition(){

return (
    <>
    
    {com}

    </>
)

}

export default Condition