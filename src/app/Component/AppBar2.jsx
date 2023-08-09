"use client"
import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function BookAppBar2() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#8F2B2F', height: '24' }}  >
        <Toolbar>
          {/* bookicon */}
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: 15 }}
          >
            <img src="education.svg" alt="" sx={{ height: 25, width: 24 }} />
          </IconButton>
          {/* title  */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '20px' }}
          >
            BookStore
          </Typography>
          </Toolbar>
          </AppBar>
    </Box>
  );
}
