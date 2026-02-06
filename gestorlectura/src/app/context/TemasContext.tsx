'use client'
import { createContext } from "react";
import { Tema } from "../Models/ModelsTemas";

interface TemasContextType {
    temas: Tema[],
    interesante: (id: number) => void
}

export const TemasContext = createContext<TemasContextType>({
    temas: [{ idTema: 1, nombreTema: 'Matemáticas', interesante: false },
        { idTema: 2, nombreTema: 'Ciencia', interesante: false },
        { idTema: 3, nombreTema: 'Historia', interesante: false },
        { idTema: 4, nombreTema: 'Literatura', interesante: false },
        { idTema: 5, nombreTema: 'Arte', interesante: false },
        { idTema: 6, nombreTema: 'Música', interesante: false },
        { idTema: 7, nombreTema: 'Deportes', interesante: false },
        { idTema: 8, nombreTema: 'Tecnología', interesante: false },
        { idTema: 9, nombreTema: 'Geografía', interesante: false },
        { idTema: 10, nombreTema: 'Filosofía', interesante: false },
        { idTema: 11, nombreTema: 'Psicología', interesante: false },
        { idTema: 12, nombreTema: 'Sociología', interesante: false },
        { idTema: 13, nombreTema: 'Economía', interesante: false },
        { idTema: 14, nombreTema: 'Política', interesante: false },
        { idTema: 15, nombreTema: 'Religión', interesante: false },
        { idTema: 16, nombreTema: 'Cultura', interesante: false },
        { idTema: 17, nombreTema: 'Salud', interesante: false },
        { idTema: 18, nombreTema: 'Medio Ambiente', interesante: false },
        { idTema: 19, nombreTema: 'Viajes', interesante: false },
        { idTema: 20, nombreTema: 'Gastronomía', interesante: false }],
    interesante: () => { }
});