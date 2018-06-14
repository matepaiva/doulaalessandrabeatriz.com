import PropTypes from 'prop-types';
import React from 'react';
import Lightbox from 'react-images';

const Caption = ({ title, description }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default Caption;
