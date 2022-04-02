import React, { useState } from 'react';
import { TextField, FormControlLabel, Box } from '@mui/material';
import PropTypes from 'prop-types';
import UseStylesVisitCard from './UseStylesVisitCard';
import Accordion from '../accordion/Accordion';

const VisitCard = ({ visits }) => {

  const styles = UseStylesVisitCard();

  // const { fullNAme, visitPurpose, visitShortDescription, urgency, doctor, bloodPressure, massBodyIndex, prevIllnesses, age, lastVisitDate, id } = visits;

  // const [edit, setEdit] = useState(false);

  // const handleEditRequest = () => {
  //   if(id === event.target.id) {
  //     setEdit(false)
  //   }
  // };

  console.log(visits);
  return (
    <>
      {visits.map((visit) => {
        return <div key={visit.id}> 
          <Accordion />
          {visit.doctor === 'Cardiologist'}

          {visit.doctor === 'Therapist'}
          
          {visit.doctor === 'Dentist'}
        </div>
      })}
    </>
  )
}

export default VisitCard;

VisitCard.propTypes = {
    visits: PropTypes.array
}