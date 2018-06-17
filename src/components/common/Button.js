import React, { Component } from 'react';
import styled from 'styled-components';
import { Text, Box } from 'components/tools';
import { resetButton, absolute, transition } from 'utils/mixins';

const ButtonWrapper = styled.button`
  ${resetButton};
  cursor: pointer;
  position: relative;
  height: 25px;
  padding: 0 0 9px 0;
  overflow: hidden;

  &:focus {
    outline: 0;
  }

  span {
    position: relative;
    z-index: 10;
    ${transition({ property: 'color' })};
  }
`;

const ButtonBorder = Box.extend`
  width: 100%;
  height: 100%;
  z-index: 0;
  transform: translateY(${props => props.offset}px);
  ${absolute({ top: 0, left: 0 })};
  ${transition({ property: 'transform' })};
`;

class Button extends Component {
  state = {
    isHover: false,
  };
  onMouseEvent = () => {
    this.setState({
      isHover: !this.state.isHover,
    });
  };
  render() {
    const { label, ...buttonProps } = this.props;
    const { isHover } = this.state;
    return (
      <ButtonWrapper
        onMouseOver={this.onMouseEvent}
        onMouseOut={this.onMouseEvent}
        isHover={isHover}
        {...buttonProps}
      >
        <Text
          isUppercase
          is="span"
          display="inline-block"
          fontSize={1}
          fontWeight="600"
          lineHeight="16px"
          letterSpacing="2px"
          color="black"
        >
          {label}
        </Text>
        <ButtonBorder bg="peach" offset={isHover ? 11 : 20} />
      </ButtonWrapper>
    );
  }
}

export default Button;