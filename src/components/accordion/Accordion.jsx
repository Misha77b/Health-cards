import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material//TextField';
import MakeStylesAccordion from './UseStylesAccordion';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  gap: 10px
`;

const Container = styled.div`
  width: 100%;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  gap: 10px;
  margin: 15px 0 10px;
  span {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: gold;
  gap: 10px;
`;

const validationSchema = yup.object({
  fullName: yup.string()
    .nullable()
    .required('Full name is required'),
  visitPurpose: yup.string()
    .nullable()
    .required('Visit purpose is required'),
  visitShortDescription: yup.string()
    .nullable()
    .required('Is required')
});



const Accordion = ({ fullName, visitPurpose, visitShortDescription, urgency, doctor, bloodPressure, massBodyIndex, prevIllnesses, age, lastVisitDate, id }) => {
  const [clicked, setClicked] = useState(false);
  MakeStylesAccordion();

  const toggle = () => {
    if (clicked) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(true);
  };

  const formik = useFormik({
    initialValues: {
      fullName: fullName || '',
      visitPurpose: visitPurpose || '',
      visitShortDescription: visitShortDescription || '',
      urgency: urgency || '',
      doctor:  doctor || '',
      bloodPressure: bloodPressure || '',
      massBodyIndex: massBodyIndex || '',
      prevIllnesses: prevIllnesses || '',
      age: age || '',
      lastVisitDate: lastVisitDate || '',
    },
    validationSchema: validationSchema,
    // onSubmit: (values) => {
    //   const editVisitValues = {
    //     fullName: values.fullName,
    //     visitPurpose: values.visitPurpose,
    //     visitShortDescription: values.visitShortDescription,
    //     urgency: selectedUrgency,
    //     doctor: selectedDoctor,
    //     bloodPressure: values.bloodPressure,
    //     massBodyIndex: values.massBodyIndex,
    //     prevIllnesses: values.prevIllnesses,
    //     age: values.age,
    //     lastVisitDate: values.lastVisitDate,
    //   }
    //   dispatch(createVisit(editVisitValues));
    // },
  });

  return (
    <AccordionSection>
      <Container>
        <form 
          style={{gap: '10px'}}
          onSubmit={formik.handleSubmit}
        >
          <Wrap onClick={() => toggle()}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </div>
            <TextField
              id="fullName"
              name="fullName"
              label="Full name"
              fullWidth
              // disabled={true}
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
            <TextField
              id='choosenDoctor'
              label='Doctor'
              name='choosenDoctor'
              value={formik.values.doctor}
              onChange={formik.handleChange}
            />
            <span>{clicked ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}</span>
          </Wrap>
          {clicked ? (
            <Dropdown>
              {doctor === 'Cardiologist' && <>
              <TextField
                id='visitPurpose'
                label='Visit purpose'
                name='visitPurpose'
                value={formik.values.visitPurpose}
                onChange={formik.handleChange}
              />
                <TextField
                  id='massBodyIndex'
                  label='MBI'
                  name='massBodyIndex'
                  value={formik.values.massBodyIndex}
                  onChange={formik.handleChange}
                />
                  <TextField
                    id='urgency'
                    label='Urgency'
                    name='urgency'
                    value={formik.values.urgency}
                    onChange={formik.handleChange}
                  />
                <TextField
                  id='visitShortDescription'
                  label='Visit desc'
                  name='visitShortDescription'
                  value={formik.values.visitShortDescription}
                  onChange={formik.handleChange}
                />
                <TextField
                  id='massBodyIndex'
                  label='MBI'
                  name='massBodyIndex'
                  value={formik.values.massBodyIndex}
                  onChange={formik.handleChange}
                />
                <TextField
                  id='prevIllnesses'
                  label='Previous illnesses'
                  name='prevIllnesses'
                  value={formik.values.prevIllnesses}
                  onChange={formik.handleChange}
                />
                <TextField
                  id='bloodPressure'
                  label='Blood pressure'
                  name='bloodPressure'
                  value={formik.values.bloodPressure}
                  onChange={formik.handleChange}
                />
              </>}

              {doctor === 'Therapist' && <>
                <TextField
                  id='age'
                  label='Age'
                  name='age'
                  value={formik.values.age}
                  onChange={formik.handleChange}
                />
              </>}

              {doctor === 'Dentist' && <>
                <TextField
                  id='lastVisitDate'
                  label='Last visit date'
                  name='lastVisitDate'
                  value={formik.values.lastVisitDate}
                  onChange={formik.handleChange}
                />
              </>}
            </Dropdown>
          ) : null}
        </form>
      </Container>
    </AccordionSection>
  );
}

export default Accordion

Accordion.propTypes = {
  fullName: PropTypes.string,
  visitPurpose: PropTypes.string,
  visitShortDescription: PropTypes.string,
  urgency: PropTypes.string,
  doctor: PropTypes.string,
  bloodPressure: PropTypes.string,
  massBodyIndex: PropTypes.string,
  prevIllnesses: PropTypes.string,
  age: PropTypes.string,
  lastVisitDate: PropTypes.string,
  id: PropTypes.number,
}