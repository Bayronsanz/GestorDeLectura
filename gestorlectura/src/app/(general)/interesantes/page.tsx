'use client'
import React, { useContext } from "react"
import Link from "next/link"
import { TemasContext } from "../../context/TemasContext"
import TemaComponent from "../../Components/componenteTemas"

export default function interesantesPage() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { temas } = useContext(TemasContext);

    const interesantes = temas.filter(t => t.interesante);

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Temas Interesantes</h1>
            <div>
                {interesantes.length > 0 ? (
                    interesantes.map(tema => (
                        <TemaComponent key={tema.idTema} tema={tema} />
                    ))
                ) : (
                    <p style={{ textAlign: 'center' }}>No hay temas marcados como interesantes.</p>
                )}
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Link href="/" passHref>
                    <button className="btn btn-secondary" style={{ padding: '10px 20px', fontSize: '16px' }}>
                        Volver
                    </button>
                </Link>*
            </div>
        </div>
    )
}