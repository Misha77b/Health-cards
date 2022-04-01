import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextField, FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';

const VisitCard = ({ visits }) => {

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
        return <> 
          {visit.doctor === 'Cardiologist' && <>
            <Accordion key={visit.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography> {visit.fullName} </Typography> <br/>
                <h1> {visit.doctor} </h1>
              </AccordionSummary>
              <AccordionDetails>
                <Typography> {visit.age} </Typography>
                <Typography> {visit.visitPurpose} </Typography>
                <Typography> {visit.visitShortDescription} </Typography>
                <Typography> {visit.bloodPressure} </Typography>
                <Typography> {visit.massBodyIndex} </Typography>
                <Typography> {visit.prevIllnesses} </Typography>
              </AccordionDetails>
            </Accordion>
          </>}

          {/* {visit.doctor === 'Therapist' && <>
            <p>{visit.age}</p>
          </>}
          
          {visit.doctor === 'Dentist' && <>
            <p>{visit.lastVisitDate}</p>
          </>} */}
        </>
      })}
    </>
  )
}

export default VisitCard;

VisitCard.propTypes = {
    visits: PropTypes.array
}