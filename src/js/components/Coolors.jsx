
import React, { useState } from "react";
import { generateRandomColor} from "../utils/GenerateRandomColor"
import CardColor from "./CardColor.jsx"


const Coolors = () => {

    const haundredZeros = Array(10).fill(0)

    const haundredColors = haundredZeros.map( item => {
        if(item == 0) {
            return generateRandomColor()
        }
        return <p>1</p>
    })

    const [ colorList, setColorList ] = useState(haundredColors);

    const generateTenColors = () => {
        let newColors = [];
        for(let i=0; i<10; i++){
            newColors = [ ...newColors, generateRandomColor()]
        }
        return newColors;
    }

    return (<>
        <div className="d-flex flex-wrap container">
            {colorList.map(color => <CardColor bgColor={color} />)}
        </div>
        <button className="btn btn-warning mx-auto my-4"
            onClick={() => setColorList([ ...colorList, ...generateTenColors() ]) }
        >
            Load More ...
        </button>
    </>)
}

export default Coolors;