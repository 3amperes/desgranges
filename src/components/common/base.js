import React from 'react';
import styled from 'styled-components';
import GLink from 'gatsby-link';
import { Grid } from 'styled-css-grid';
import { Box, Text, Heading } from 'components/tools';
import { GRID } from 'utils/constants';
import { resetLink } from 'utils/mixins';

export const PageHeader = ({ children, title, isBig }) => (
  <header>
    <Box textAlign="center">
      <Heading fontSize={isBig ? 9 : 8}>{title}</Heading>
      {children}
    </Box>
  </header>
);

export const Container = ({ children, height = '100vh', ...props }) => (
  <Grid
    columns={GRID.COLUMNS}
    gap={GRID.GAP}
    justifyContent="center"
    alignContent="center"
    height={height}
    {...props}
  >
    {children}
  </Grid>
);

export const Paragraph = ({ children, mb = 3, ...props }) => (
  <Text is="p" display="block" mt={0} mb={mb} {...props}>
    {children}
  </Text>
);

export const SurTitle = ({ label }) => (
  <Text
    color="peach"
    fontFamily="UntitledSerif"
    fontWeight="700"
    lineHeight="20px"
    textAlign="center"
    mb={3}
  >
    {label}
  </Text>
);

export const Link = styled(GLink)`
  ${resetLink};
`;
