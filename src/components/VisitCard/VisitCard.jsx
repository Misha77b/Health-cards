import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextField, FormControlLabel, Box } from '@mui/material';
import PropTypes from 'prop-types';
import UseStylesVisitCard from './UseStylesVisitCard';

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
        return <> 
          {visit.doctor === 'Cardiologist' && <>
            <Accordion key={visit.id} className={styles.root} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={styles.accordionSummary}
              >
                <TextField
                  sx={{flexShrink: 0, margin:'10px' }}
                  variant='standard'
                  id="fullName"
                  name="fullName"
                  label="Full name"
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                  value={visit.fullName}
                  // onChange={formik.handleChange}
                />
                <TextField
                  sx={{flexShrink: 0, margin:'10px' }}
                  variant='standard'
                  id="doctor"
                  name="doctor"
                  label="Doctor"
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                  value={visit.doctor}
                  // onChange={formik.handleChange}
                />
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