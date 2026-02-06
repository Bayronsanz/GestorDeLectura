'use client'
import React from "react"
import { TemasContext } from "../context/TemasContext"
import { Tema } from "../Models/ModelsTemas"

export default function TemaComponent({ tema }: { tema: Tema }) {
    const { interesante } = React.useContext(TemasContext);

    return (
        <div style={{
            padding: '8px',
            border: '3px solid #67b460',
            margin: '5px', display: 'flex',
            justifyContent: 'space-between'
        }}>
            <span>{tema.nombreTema}</span>

            <button className='btn btn-info' type='button' onClick={() => interesante(tema.idTema)} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                {tema.interesante ? 'Desmarcar' : 'interesante'}
            </button>
        </div>
    )
}