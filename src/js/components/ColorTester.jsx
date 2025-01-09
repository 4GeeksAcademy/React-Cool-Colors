import React, { useState, useEffect } from "react";
import CardColor from "./CardColor.jsx";



const ColorTester = () => {

    const coloresIniciales = ['orange', 'purple', 'red']
    const [ colors, setColors ] = useState(coloresIniciales)
    const [ newColor, setNewColor ] = useState("");

    useEffect(()=>{
        // useEffect de Update o de Sincronización
        console.log("La paleta de colores ha cambiado!!")

    }, [colors]) // <----- atento a los cambios de colors



    return <>
        <h1 className="text-white">ColorPalette</h1>

        <div className="d-flex col-6 mx-auto">
            <input placeholder="color" className="form-control"
                value={newColor} onChange={(event) => setNewColor(event.target.value)}
            />
            <button className="btn btn-warning mx-2"
                onClick={() => setColors([ ...colors, newColor])}
            >
                Add
            </button>
            <button className="btn btn-info" onClick={() => {

                const randonNumber = Math.floor(Math.random()*colors.length)
                setColors(colors.filter( (_, index) => index !== randonNumber ))

            }}>
                Delete random
            </button>
        </div>

        <div className="d-flex flex-wrap">
            {
                colors.map( item => <CardColor key={item} bgColor={item} />)
            }
        </div>
    </>
}

export default ColorTester;