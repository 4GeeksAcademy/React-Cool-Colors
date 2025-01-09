import React, { useEffect } from "react";

const CardColor = (props) => {

    // este comoponente se agrega en varios lugares

    useEffect(() => {
        console.log("Entro un nuevo componente CardColor a la UI " + props.bgColor)

        return () => {
            console.log("El componente de color " + props.bgColor + " ha fallecido.")
        }

    }, [])

    return (
        <div className="col-4 p-2">
            <div className="card">
                <div src="..." className="card-img-top" style={{ 
                    backgroundColor: props.bgColor,
                    minHeight: '180px'
                 }}/>
                <div className="card-body">
                    <p className="card-text">{props.bgColor}</p>
                </div>
            </div>
        </div>
    )
}

export default CardColor;