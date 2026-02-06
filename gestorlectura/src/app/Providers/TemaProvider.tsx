/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import React, { useContext, useEffect, useState } from 'react'
import { plantila } from '../context/plantilla'
import { Tema } from '../Models/ModelsTemas'
import { TemasContext } from '../context/TemasContext'

export default function TemaProvider({ children }: plantila) {

    const [temas, setTemas] = useState<Tema[]>([])

    useEffect(() => {
        const temasI: Tema[] = Array.from({ length: 20 }, (_, i) => ({
            idTema: i + 1,
            nombreTema: `Tema ${i + 1}`,
            interesante: false,
        }))

        setTemas(temasI);
    }, [])

    const Interesante = (id: number) => {
        setTemas(prevTemas => prevTemas.map(temas => temas.idTema === id ? { ...temas, interesante: !temas.interesante } : temas))
    }

    return (
        <TemasContext.Provider value={{ temas, interesante: Interesante }}>
            {children}
        </TemasContext.Provider>
    )
}

export function useContextTema() {
    return useContext(TemasContext);
}
