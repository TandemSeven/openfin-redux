import React, { Children, cloneElement } from 'react';
import { connect } from 'react-redux';

// Redux content
import { clientSetValue } from '../reduxs';
import { ClientContextProvider } from '../reduxs/client/context';

const ClientCtxProviderComponent = (props) => {
  const { actions, children, state } = props;
  const reduxContent = { actions, state };

  // Pass all of the redux props to each `this.props.children`.
  const childrenWithProps = Children.map(children, child => (
      cloneElement(child, reduxContent))
  );

  return (
      <ClientContextProvider value={reduxContent}>
        {childrenWithProps}
      </ClientContextProvider>
  )
};

// Standard Redux container stuff. It's up to you how to break this stuff up.
const mapStateToProps = ({ client }) => ({
  state: client,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    updateClientCount: count => dispatch(clientSetValue({ count })),
  }
});

export const ClientCtxProvider = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientCtxProviderComponent);
