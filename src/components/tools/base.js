import React from 'react';
import styled from 'styled-components';
import GLink from 'gatsby-link';
import Responsive from 'react-responsive';
import { Box, Text, Heading, Grid, Cell } from 'components';
import { GRID } from 'utils/constants';
import { resetLink } from 'utils/mixins';

export const Desktop = props => <Responsive {...props} minWidth={1200} />;
export const Tablet = props => (
  <Responsive {...props} minWidth={768} maxWidth={1199} />
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
  min-height: ${({ height }) => height};
  height: ${({ height }) => height};
`;

export const Container = ({ children, height = 'auto', ...props }) => (
  <ContainerWrapper height={height}>
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

export const DecoratedContainer = ({ children, height = 'auto', ...props }) => {
  const renderChildren = <Box py={4}>{children}</Box>;
  return (
    <Container height={height} {...props}>
      <Mobile>
        <Cell width={6}>{renderChildren}</Cell>
      </Mobile>
      <Tablet>
        <Cell width={8} left={3}>
          {renderChildren}
        </Cell>
      </Tablet>
      <Desktop>
        <Cell width={4} left={5}>
          {renderChildren}
        </Cell>
      </Desktop>
    </Container>
  );
};

export const Section = ({ children }) => (
  <Box is="section" py={[4, 6, 7]} position="relative">
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
