import React, { useState } from "react"
import { generateRandomColor } from "../utils/GenerateRandomColor"

const ColorsTable = () => {
    // sector logico

    const haundredPositionArray = Array(100).fill()
    const haundredColors = haundredPositionArray.map(posicion => generateRandomColor())

    const [ paginaActual, setPaginaActual ] = useState(1);
    
    const [ colors , setColors ] = useState(haundredColors);
    const [ limit, setLimit ] = useState(10)

    // sector visual
    return <>
        <div className="container px-5">
            <h1 className="text-white">Colors Table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Color</th>
                        <th scope="col">Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        colors.map((item, index) => (
                            <tr key={item + index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item}</td>
                                <td className="d-flex flex-column">
                                    <span style={{ background: item, minHeight: '25px', minWidth: '10px'}}>
                                        
                                    </span>
                                </td>
                            </tr>
                        )).slice((paginaActual-1)*limit, paginaActual*limit)
                    }
                </tbody>
                </table>
                <nav className="d-flex">
                    <ul className="pagination mx-auto">

                        <li className="page-item" onClick={() => setPaginaActual( paginaActual > 1 ? paginaActual - 1 : paginaActual )}>
                            <a className="page-link">Previous</a>
                        </li>

                        {
                            Array.from(Array(Math.floor(colors.length/limit)).keys())
                                .map((pageNumber) => (
                                    <li className={"page-item " + ((pageNumber + 1) == paginaActual ? 'active': '')} 
                                        key={'page-number-'+pageNumber}
                                        onClick={() => setPaginaActual(pageNumber + 1)}
                                    >
                                        <a className="page-link">{pageNumber + 1}</a>
                                    </li>
                            ))
                        }

                        <li className="page-item" onClick={() => setPaginaActual((paginaActual + 1 > Math.floor(colors.length / limit)) ? paginaActual : paginaActual + 1)}>
                            <a className="page-link">Next</a>
                        </li>
                    </ul>
                </nav>
        </div>
    </>
}

export default ColorsTable;