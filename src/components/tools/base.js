import React from 'react';
import styled from 'styled-components';
import GLink from 'gatsby-link';
import Responsive from 'react-responsive';
import { Box, Text, Heading, Grid, Cell } from 'components';
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

export const CenterSection = ({ children, height = '100vh', ...props }) => (
  <Container height={height} {...props}>
    <Cell width={12} center>
      {children}
    </Cell>
  </Container>
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

export const Desktop = props => <Responsive {...props} minWidth={992} />;
export const Tablet = props => (
  <Responsive {...props} minWidth={768} maxWidth={991} />
);
export const Mobile = props => <Responsive {...props} maxWidth={767} />;
export const Default = props => <Responsive {...props} minWidth={768} />;
