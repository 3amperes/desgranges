import React from 'react';
import styled from 'styled-components';
import GLink from 'gatsby-link';
import Responsive from 'react-responsive';
import { Box, Text, Heading, Grid, Cell } from 'components';
import { GRID } from 'utils/constants';
import { resetLink } from 'utils/mixins';

export const Desktop = props => <Responsive {...props} minWidth={992} />;
export const Tablet = props => (
  <Responsive {...props} minWidth={768} maxWidth={991} />
);
export const Mobile = props => <Responsive {...props} maxWidth={767} />;
export const Default = props => <Responsive {...props} minWidth={768} />;

export const PageHeader = ({ children, title, isBig }) => (
  <Box is="header" textAlign="center">
    <Heading fontSize={isBig ? 9 : 8}>{title}</Heading>
    {children}
  </Box>
);

const ContainerWrapper = styled.div`
  min-height: ${({ isFullHeight }) => (isFullHeight ? '100vh' : 'auto')};
  height: ${({ isFullHeight }) => (isFullHeight ? '100vh' : 'auto')};
`;

export const Container = ({ children, height = '100%', ...props }) => (
  <ContainerWrapper isFullHeight={height === '100%'}>
    <Mobile>
      <Grid
        columns={GRID.MOBILE.COLUMNS}
        gap={GRID.MOBILE.GAP}
        justifyContent="center"
        alignContent="center"
        height={height}
        {...props}
      >
        {children}
      </Grid>
    </Mobile>
    <Tablet>
      <Grid
        columns={GRID.TABLET.COLUMNS}
        gap={GRID.TABLET.GAP}
        justifyContent="center"
        alignContent="center"
        height={height}
        {...props}
      >
        {children}
      </Grid>
    </Tablet>
    <Desktop>
      <Grid
        columns={GRID.DESKTOP.COLUMNS}
        gap={GRID.DESKTOP.GAP}
        justifyContent="center"
        alignContent="center"
        height={height}
        {...props}
      >
        {children}
      </Grid>
    </Desktop>
  </ContainerWrapper>
);

export const CenterSection = ({ children, height = 'auto', ...props }) => (
  <Container height={height} {...props}>
    <Mobile>
      <Cell width={6} center>
        {children}
      </Cell>
    </Mobile>
    <Default>
      <Cell width={12} center>
        {children}
      </Cell>
    </Default>
  </Container>
);

export const Section = ({ children }) => (
  <Box is="section" py={5} position="relative">
    {children}
  </Box>
);

export const DecorationWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => top || '50%'};
  transform: ${({ top }) => (top ? 'none' : 'translateY(-50%)')};
  left: ${({ left }) => left || 'auto'};
  right: ${({ right }) => right || 'auto'};
  width: ${({ width }) => width};
  z-index: 0;
`;

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
