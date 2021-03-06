import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const checkoutPropTypes = {
  isCompleted: PropTypes.bool.isRequired,
};

const Checkout = props => (
  <span>
    {props.isCompleted ? (
      <FontAwesomeIcon icon={faCheckDouble} size="2x" />
    ) : (
      <FontAwesomeIcon icon={faSquare} size="2x" />
    )}
  </span>
);

Checkout.propTypes = checkoutPropTypes;

export default Checkout;
