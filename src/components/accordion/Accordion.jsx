import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { AccordionSection, Container, Wrap, Dropdown, StyledTextField } from './AccordionStyledComponents';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { useFormik } from 'formik';
import { validationSchema } from './ValidationSchema';
import Button from '@mui/material/Button';
import { deleteVisit, updateVisit, getVisit } from '../../API/visits/visits.thunks';

const Accordion = ({ fullName, visitPurpose, visitShortDescription, urgency, doctor, bloodPressure, massBodyIndex, prevIllnesses, age, lastVisitDate, id }) => {

  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [editBtnRendering, setEditBtnRendering] = useState('block');
  const [saveBtnRendering, setSaveBtnRendering] = useState('none');

  const accordionToggle = () => {
    if (clicked) {
      return setClicked(null);
    }
    setClicked(true);
  };

  const handleVisitDelete = (e) => {
    const id = e.target.id;
    dispatch(deleteVisit(id));
  }

  const handleEditRequest = (e) => {
    const id = e.target.id;

    dispatch(getVisit(id));
    setDisabled(!disabled);
    setEditBtnRendering('none');
    setSaveBtnRendering('block');
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
      id: id,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const editVisitValues = {
        fullName: values.fullName,
        visitPurpose: values.visitPurpose,
        visitShortDescription: values.visitShortDescription,
        urgency: values.urgency,
        doctor: values.doctor,
        bloodPressure: values.bloodPressure,
        massBodyIndex: values.massBodyIndex,
        prevIllnesses: values.prevIllnesses,
        age: values.age,
        lastVisitDate: values.lastVisitDate,
        id: values.id
      }
      dispatch(updateVisit(editVisitValues));
      setDisabled(!disabled);
      setEditBtnRendering('block');
      setSaveBtnRendering('none');
    },
  });

  return (
    <AccordionSection key={id} id={id}>
      <Container>
        <form
          onSubmit={formik.handleSubmit}
        >
          <Wrap>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Button
                sx={{display: `${editBtnRendering}`}}
                onClick={handleEditRequest}
                id={id}
                color='secondary' 
                variant='contained'
              >
                Edit
              </Button>
              <Button 
                sx={{display: `${saveBtnRendering}`}}
                type='submit'
                id={id}
                color='secondary' 
                variant='contained'
              >
                Save
              </Button>
              <Button 
                onClick={handleVisitDelete}
                id={id}
                color='error' 
                variant='contained'
              >
                Delete
              </Button>
            </div>
            <StyledTextField
              disabled={disabled}
              variant="standard"
              id="fullName"
              label="Full name"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
            <StyledTextField
              disabled={disabled}
              variant="standard"
              id='doctor'
              label='Doctor'
              name='doctor'
              value={formik.values.doctor}
              onChange={formik.handleChange}
            />
            <span onClick={() => accordionToggle()}>{clicked ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}</span>
          </Wrap>
          {clicked ? (
            <Dropdown>
              {doctor === 'Cardiologist' && <>
                <StyledTextField
                  disabled={disabled}
                  variant="standard"
                  fullWidth
                  id='visitPurpose'
                  label='Visit purpose'
                  name='visitPurpose'
                  value={formik.values.visitPurpose}
                  onChange={formik.handleChange}
                />
                <StyledTextField  
                  disabled={disabled}
                  variant="standard"
                  fullWidth
                  id='visitShortDescription'
                  label='Visit desc'
                  name='visitShortDescription'
                  value={formik.values.visitShortDescription}
                  onChange={formik.handleChange}
                />
                <StyledTextField
                  disabled={disabled}
                  variant="standard"
                  fullWidth
                  id='urgency'
                  label='Urgency'
                  name='urgency'
                  value={formik.values.urgency}
                  onChange={formik.handleChange}
                />
                <StyledTextField
                  disabled={disabled}
                  variant="standard"
                  fullWidth
                  id='bloodPressure'
                  label='Blood pressure'
                  name='bloodPressure'
                  value={formik.values.bloodPressure}
                  onChange={formik.handleChange}
                />
                <StyledTextField
                  disabled={disabled}
                  variant="standard"
                  fullWidth
                  id='massBodyIndex'
                  label='MBI'
                  name='massBodyIndex'
                  value={formik.values.massBodyIndex}
                  onChange={formik.handleChange}
                />
                <StyledTextField
                  disabled={disabled}
                  variant="standard"
                  fullWidth
                  id='prevIllnesses'
                  label='Previous illnesses'
                  name='prevIllnesses'
                  value={formik.values.prevIllnesses}
                  onChange={formik.handleChange}
                />
                <StyledTextField
                  disabled={disabled}
                  variant="standard"
                  fullWidth
                  id='age'
                  label='Age'
                  name='age'
                  value={formik.values.age}
                  onChange={formik.handleChange}
                />
              </>}

              {doctor === 'Dentist' && <>
                <StyledTextField
                  disabled={disabled}
                  variant="standard"
                  fullWidth
                  id='visitPurpose'
                  label='Visit purpose'
                  name='visitPurpose'
                  value={formik.values.visitPurpose}
                  onChange={formik.handleChange}
                />
                <StyledTextField  
                  disabled={disabled}
                  variant="standard"
                  fullWidth
                  id='visitShortDescription'
                  label='Visit desc'
                  name='visitShortDescription'
                  value={formik.values.visitShortDescription}
                  onChange={formik.handleChange}
                />
                <StyledTextField
                  disabled={disabled}
                  variant="standard"
                  fullWidth
                  id='urgency'
                  label='Urgency'
                  name='urgency'
                  value={formik.values.urgency}
                  onChange={formik.handleChange}
                />
                <StyledTextField
                  disabled={disabled}
                  variant="standard"
                  fullWidth
                  id='lastVisitDate'
                  label='Last visit date'
                  name='lastVisitDate'
                  value={formik.values.lastVisitDate}
                  onChange={formik.handleChange}
                />
              </>}

              {doctor === 'Therapist' && <>
                <StyledTextField
                  disabled={disabled}
                  variant="standard"
                  fullWidth
                  id='visitPurpose'
                  label='Visit purpose'
                  name='visitPurpose'
                  value={formik.values.visitPurpose}
                  onChange={formik.handleChange}
                />
                <StyledTextField  
                  disabled={disabled}
                  variant="standard"
                  fullWidth
                  id='visitShortDescription'
                  label='Visit desc'
                  name='visitShortDescription'
                  value={formik.values.visitShortDescription}
                  onChange={formik.handleChange}
                />
                <StyledTextField
                  disabled={disabled}
                  variant="standard"
                  fullWidth
                  id='urgency'
                  label='Urgency'
                  name='urgency'
                  value={formik.values.urgency}
                  onChange={formik.handleChange}
                />
                <StyledTextField
                  disabled={disabled}
                  variant="standard"
                  fullWidth
                  id='age'
                  label='Age'
                  name='age'
                  value={formik.values.age}
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