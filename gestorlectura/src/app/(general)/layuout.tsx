import React from 'react';
import TemasProvider from '../../app/Providers/TemaProvider';

export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <TemasProvider>
                {children}
            </TemasProvider>
        </div>
    )
}