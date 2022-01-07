import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    purple: {
      main: '#a65cff',
      darker: '#053e85',
    },
    yellow: {
      main: '#ffe100',
      contrastText: '#fff',
    },
    red: {
        main: '#ff5100',
        contrastText: '#fff',
      },
    black: {
        main: '#000000',
        contrastText: '#fff',
    },
    green: {
        main: '#00a84c',
        contrastText: '#fff',
    },
  },
});



function Navbar({ countCartItems }) {


    return (
        <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
            <ThemeProvider theme={theme}> 

                <Link to="/furniture" style={{ textDecoration: 'none' }}>
                    <Button variant="text" color='purple'>Store</Button>
                </Link>  {" "}

                <Link to="/history" style={{ textDecoration: 'none' }}>
                    <Button variant="text" color='yellow'>History</Button>
                </Link>  {" "}

                <Link to="/create" style={{ textDecoration: 'none' }}>
                    <Button variant="text" color='red'>Create</Button>
                </Link> {" "}

                <Link to="/sell" style={{ textDecoration: 'none' }}>
                    <Button variant="text" color='green'>Sell</Button>
                </Link>  {" "}

                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <Button variant="text" color='black'>
                      
                      Cart{' '}
                      {countCartItems ? (
                        <p style={{ color: 'magenta'}}>{countCartItems}</p>
                      ) : (
                        ''
                      )}
                      
                    </Button>
                </Link>
            </ThemeProvider>
          </nav>
    )
}

export default Navbar;