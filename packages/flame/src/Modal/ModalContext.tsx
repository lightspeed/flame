import * as React from 'react';

type Props = {
  children?: React.ReactNode;
  onCancel?: Function;
};
const Context = React.createContext<Props>(null);

const Provider: React.FC<Props> = ({ children, onCancel }) => {
  return (
    <Context.Provider
      value={{
        onCancel,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;

export { Provider, Consumer };
