import React, { useState } from 'react';
import {Button, Fade, makeStyles, Modal, Slide, TextField} from "@mui/material";
import Box from "@mui/material/Box";



const PayProcessBox = ({ payToName, paySum }: any) => {

    return (
        <Box sx={{
            width: '400px',
            height: 'calc(100% - 57px)',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translate(-20%, -50%)',
            backgroundImage: 'url("/images/bgs/pay-success-bg.png")',
            boxShadow: 24,
            p: 4,
        }}>
            <div

                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}

            >
                <h3>
                    Перевод выполнен
                </h3>
                <h3>
                    { paySum }
                </h3>
                <p>
                    { payToName }
                </p>
            </div>
        </Box>
    );
};



export default PayProcessBox;
