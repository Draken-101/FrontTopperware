import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { useState } from 'react';
import createPdf from '../Vender/Datos/createPdf';
import generateTicket from '../Vender/Datos/generateTicket';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function Ticket({ }) {
    const [base64, setBase64] = useState('');
    const [message, setMessage] = useState('');
    const onGenerateTicket = async (output) => {
        setBase64('');
        setMessage('');

        const response = await generateTicket(output, []);

        if (!response?.success) {
            alert(response?.message);
            return;
        }

        if (output === 'b64') {
            setBase64(response?.content ?? '');
        }

        setMessage(response?.message);

        setTimeout(() => {
            setMessage('');
        }, 2000);
    };

    return (
        <>
            <button
                className="mx-btn-primary"
                onClick={() => onGenerateTicket('b64')}
            >
                GENERAR TICKET
            </button>
            {base64 && (
                <iframe
                    src={`data:application/pdf;base64,${base64}`}
                    className="mx-iframe"
                />
            )}
        </>
    )
};