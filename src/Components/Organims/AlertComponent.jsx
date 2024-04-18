import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Snackbar } from '@mui/material';
const Container = styled.div`
    position: absolute;
    bottom: 0;
    color: rgba(255, 247, 243, 1);
    font-size: 1.5vw;
    .Snackbar{
        position: relative;
        div{
            border-radius: .3vw;
            gap: 1vw;
            padding: 1vw;
            display: flex;
            align-items: center;
            position: relative;
        }
    }
    .Add{
        background-color: rgba(87, 0, 155, 0.61);
    }
    .Delete{
        background-color: #ba007c7d;
    }
`;
export function AlertComponent({ alert }) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(true)
    }, [alert])
    return (
        <Container>
        <Snackbar
          className="Snackbar"
          open={open}
          autoHideDuration={5000}
          onClose={() => setOpen(false)}
        >
            <div className={alert ? alert.type : ''}>
            {alert ? alert.icon() : ''}
            {alert ? alert.title : ''}
            </div>
        </Snackbar>
        </Container>
    )
}