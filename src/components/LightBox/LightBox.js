import PropTypes from 'prop-types';
import React from 'react';
import ReactImages from 'react-images';
import Caption from './Caption';

const mapImagesToLightBoxProps = ({ src, title, description }) => ({
  src,
  caption: <Caption title={title} description={description} />,
});

const LightBox = ({ images, currentImage, isOpen, onClickNext, onClickPrev, onClose }) => (
  <ReactImages
    backdropClosesModal
    preloadNextImage
    showCloseButton={false}
    images={images.map(mapImagesToLightBoxProps)}
    currentImage={currentImage}
    onClickPrev={onClickPrev}
    onClickNext={onClickNext}
    onClose={onClose}
    isOpen={isOpen} />
);

export default LightBox;
