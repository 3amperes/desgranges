import React from 'react';
import GLink, { navigateTo } from 'gatsby-link';
import { TimelineLite } from 'gsap';
import { Box } from 'components';
import { absolute } from 'utils/mixins';
import withRouter from 'react-router/withRouter';

export const AnimatedScreenContext = React.createContext();
const animationDuration = 600;
const tweenDuration = (animationDuration / 3000) * 2;

export const AnimatedLink = props => (
  <AnimatedScreenContext.Consumer>
    {navigateTo => (
      <GLink
        {...props}
        onClick={e => {
          if (
            e.button === 0 && // ignore right clicks
            !props.target && // let browser handle "target=_blank"
            !e.defaultPrevented && // onClick prevented default
            !e.metaKey && // ignore clicks with modifier keys...
            !e.altKey &&
            !e.ctrlKey &&
            !e.shiftKey
          ) {
            e.preventDefault();
            navigateTo(props.to, e);
          }
        }}
      />
    )}
  </AnimatedScreenContext.Consumer>
);

const AnimationComponentWrapper = Box.extend`
  ${absolute({ top: 0, bottom: 0, left: 0, right: 0 })};
  position: fixed;
  z-index: 999;
  transform: translateX(-100%);
`;

class _AnimatedScreen extends React.Component {
  wrapper = React.createRef();
  currentTimeout;

  componentWillUnmount() {
    if (this.currentTimeout) {
      clearTimeout(this.currentTimeout);
    }
  }

  navigateTo = to => {
    // TODO prefetch but how ?

    if (this.currentTimeout) {
      clearTimeout(this.currentTimeout);
    }

    const wrapper = this.wrapper.current;

    this.animation = new TimelineLite();
    this.animation
      .set(wrapper, { x: '-100%' })
      .to(wrapper, tweenDuration, { x: '0%' })
      .to(wrapper, tweenDuration, { x: '-100%' }, `+=${tweenDuration}`)
      .set(wrapper, { x: '-100%' });
    this.animation.play();

    this.currentTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
      navigateTo(to);
    }, tweenDuration * 1000);
  };

  render() {
    const { children } = this.props;
    return (
      <AnimatedScreenContext.Provider value={this.navigateTo}>
        <AnimationComponentWrapper innerRef={this.wrapper} bg={'sea'} />
        {children}
      </AnimatedScreenContext.Provider>
    );
  }
}

export const AnimatedScreen = withRouter(_AnimatedScreen);
