import React from 'react';
import PropTypes from 'prop-types';

const VisitCard = ({ visits }) => {

  return (
    <>
        <h2>Visit cards</h2>
        {visits.map((visit) => {
            <h2>{visit.doctor}</h2>
        })}
    </>
  )
}

export default VisitCard;

VisitCard.propTypes = {
    visits: PropTypes.array
}