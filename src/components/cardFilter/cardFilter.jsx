import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { MenuItem, TextField } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// import Select from '@mui/material/Select';

import { searchFilter, searchByDoctorFilter, searchByUrgencyFilter } from '../../API/visits/visits.actions';
import UseStylesCardFilter from './useStylesCardFilter';

const CardFilter = () => {
  UseStylesCardFilter();
  const dispatch = useDispatch()
  
  const [doctor, setDoctor] = useState('');
  const [urgency, setUrgency] = useState('');
  
  const onSearchFilter = (e) => {
    console.log(e.target.value);
    console.log(dispatch(searchFilter(e.target.value)));
    dispatch(searchFilter(e.target.value));
  }

  const onSearchByDoctor = (e) => {
    setDoctor(e.target.value);
    dispatch(searchByDoctorFilter(e.target.value))
  };

  const onSearchByUrgency = (e) => {
    setUrgency(e.target.value);
    dispatch(searchByUrgencyFilter(e.target.value))
  };

  return (
    <div className='search-wrapper'>
      <Paper
        className='search search-input'
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


      {/* try to do select search filter for docotr */}
      <TextField
        select
        className='search dropdown-filter dropdown-doctor-search'
        value={doctor}
        label="Doctor"
        onChange={onSearchByDoctor}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Therapist">Therapist</MenuItem>
        <MenuItem value="Dentist">Dentist</MenuItem>
        <MenuItem value="Cardiologist">Cardiologist</MenuItem>
      </TextField>

      {/* try to do select search filter by urgency */}
      <TextField
        select
        className='search dropdown-filter dropdown-urgency-search'
        value={urgency}
        label="Urgency"
        onChange={onSearchByUrgency}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Normal">Normal</MenuItem>
        <MenuItem value="Priority">Priority</MenuItem>
        <MenuItem value="Urgent">Urgent</MenuItem>
      </TextField>
    </div>
  )
}

export default CardFilter