'use client'
import { TemasContext } from "./context/TemasContext";
import TemaComponent from "./Components/componenteTemas";
import Link from "next/link";
import React from "react";

export default function Home() {
  const { temas } = React.useContext(TemasContext);

  return (
    <div className="container" style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Pantalla Principal</h3>
      <div style={{ marginBottom: '20px' }}>
        {temas.map((tema) => (
          <TemaComponent key={tema.idTema} tema={tema} />
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <Link href="interesantes" passHref>
          <button className="btn btn-secondary" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Visualizar temas interesantes
          </button>
        </Link>
      </div>
    </div>
  );
}
