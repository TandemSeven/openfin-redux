import React, { useState, useEffect } from "react";

export const Home = (props) => {
  const { actions, state } = props;
  const [undefined, setData] = useState('');
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  // Actions
  const onOpenWindow = () => setIsWindowOpen(true);
  const onUpdateCount = () => actions.updateClientCount(state.count + 1);

  useEffect(() => {
    const launchWindow = async () => {
      if (window.fin && isWindowOpen) {
        const result = await window.fin.Window.create({
          name: "Open Fin Window",
          url: "http://localhost:3000/window",
          defaultWidth: 600,
          defaultHeight: 400,
          resizable: true,
          autoShow: true
        });

        setData(result.data);
      }
    };

    launchWindow();
  }, [isWindowOpen]);

  return (
    <>
      <div>
        <button onClick={onOpenWindow}>
          New Window
        </button>
      </div>
      <div>
        <button onClick={onUpdateCount}>
          Update the count
        </button>
        <h2>Current count: {state.count}</h2>
      </div>
    </>
  )
};
