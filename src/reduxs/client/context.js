import React, { createContext } from 'react';

export const ClientContext = createContext();

const { Provider, Consumer } = ClientContext;

// Export for wrappers.
export const ClientContextProvider = Provider;
export const ClientContextConsumer = Consumer;

// TODO: We may not need this.
export const withClientContext = (Component) => (props) => (
  <ClientContextConsumer>
    {value => <Component {...props} clientContext={value}/>}
  </ClientContextConsumer>
);
