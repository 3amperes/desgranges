import React from 'react';
import styled from 'styled-components';

const Figure = styled.figure`
  img {
    margin-bottom: 0;
  }
`;

const Thumbnail = ({ img, alt, caption }) => (
  <Figure>
    <img src={img.src} srcSet={img.srcSet} alt={alt ? alt : ''} />
    {caption && <figcaption>{caption}</figcaption>}
  </Figure>
);

export default Thumbnail;
