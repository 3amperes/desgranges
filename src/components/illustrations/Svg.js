import React from 'react';
export const Svg = ({ viewBox, svgRef, children }) => (
  <svg viewBox={viewBox} width="100%" ref={svgRef}>
    {children}
  </svg>
);
