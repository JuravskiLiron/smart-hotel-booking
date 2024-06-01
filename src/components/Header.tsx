import React from 'react'
import { AppBar, Toolbar, Typography, Button, Link, Box } from '@mui/material';
import '/src/App.css';
import '/src/index.css';

const styles = `
  * {
    font-style: italic;
  }
  .flexGrow {
    flex-grow: 1;
    display: flex;
    justify-content: center; /* Center horizontally */
  }
  
  .link {
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
  }
`;


export default function Header(){
    return(
        <AppBar position="static" color="primary">
              <style>{styles}</style>
              <Toolbar>
        <Typography variant="h6" className="flexGrow">
          Find Your Hotel!
        </Typography>
        <Box>
          <Link href="" className="link">
            Курсы
          </Link>
          <Link href="#" className="link">
            О нас
          </Link>
          <Link href="#" className="link">
            Контакты
          </Link>
          <Button color="inherit">Вход</Button>
        </Box>
      </Toolbar>
        </AppBar>
    );
}