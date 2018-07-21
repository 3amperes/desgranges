import React from 'react';
import { TimelineLite } from 'gsap';
import { Box } from 'components';
import { absolute } from 'utils/mixins';
import { TransitionGroup, Transition } from 'react-transition-group';
import withRouter from 'react-router/withRouter';

const animationDuration = 600;
const tweenDuration = (animationDuration / 3000) * 2;

const AnimationComponentWrapper = Box.extend`
  ${absolute({ top: 0, bottom: 0, left: 0, right: 0 })};
  z-index: 999;
  transform: translateX(-100%);
`;

class AnimationComponent extends React.Component {
  wrapper = React.createRef();

  animate = () => {
    const wrapper = this.wrapper.current;

    this.animation = new TimelineLite();
    this.animation
      .set(wrapper, { x: '-100%' })
      .to(wrapper, tweenDuration, { x: '0%' })
      .to(wrapper, tweenDuration, { x: '-100%' }, `+=${tweenDuration}`)
      .set(wrapper, { x: '-100%' });
    this.animation.play();
  };

  render() {
    return <AnimationComponentWrapper innerRef={this.wrapper} bg={'sea'} />;
  }
}

class ScreenWrapper extends React.Component {
  shouldComponentUpdate() {
    // Do not update previous screen in order to keep the content visible while transitionning to new screen
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    const { state, render } = this.props;
    return render(
      state === 'entering'
        ? {
            style: {
              display: 'none',
            },
          }
        : {}
    );
  }
}

class _AnimatedScreen extends React.Component {
  animationComponent = React.createRef();

  onEntering = () => {
    this.animationComponent.current.animate();
  };

  render() {
    const { render, location } = this.props;
    return (
      <React.Fragment>
        <AnimationComponent ref={this.animationComponent} />
        <TransitionGroup component={null}>
          <Transition
            key={location.pathname}
            timeout={animationDuration}
            onEntering={this.onEntering}
          >
            {state => (
              <ScreenWrapper
                state={state}
                location={location}
                render={render}
              />
            )}
          </Transition>
        </TransitionGroup>
      </React.Fragment>
    );
  }
}

export const AnimatedScreen = withRouter(_AnimatedScreen);
