'use client'

import * as React from "react";
import Image from "next/image";
import {Card} from "@mui/material";

export default function Controls({ isOpen }) {
    return (
        <Card
            sx={{
                height: 100,
                width: 300,
                backgroundColor: '#1D2225',
                color: 'white',
                position: 'absolute',
                right: 20,
                top: 20,
                display: isOpen ? '' : 'none',
                padding: '12px 20px'
            }}
        >
          <p>
              Imitate reload
          </p>
        </Card>
    );
}