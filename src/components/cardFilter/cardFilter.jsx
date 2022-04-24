import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import TextField from '@mui/material//TextField';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { searchFilter } from '../../API/visits/visits.actions';
import UseStylesCardFilter from './useStylesCardFilter';

const CardFilter = () => {
  UseStylesCardFilter();
  const dispatch = useDispatch()
  
  const onSearchFilter = (e) => {
    console.log(e.target.value);
    console.log(dispatch(searchFilter(e.target.value)));
    dispatch(searchFilter(e.target.value));
  }

  return (
    // <div className='filter-wrapper'>
    //   <TextField 
    //     sx={{width: '80vw', margin: '30px auto', background: 'white', borderRadius: '5px'}}
    //     label='Search...'
    //     fullWidth
    //     type='search'
    //   />
    // </div>
    
    <Paper
      component="form"
      sx={{ 
        marginTop: '20px', 
        p: '2px 4px', 
        display: 'flex', 
        alignItems: 'center', 
        width: '50vw',
        boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        onChange={onSearchFilter}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default CardFilter