import React from "react";

export const withStorageListener = (WrappedComponent ) => {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        console.log("cambio todos");
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
        props.sincronize();
        setStorageChange(false);
    };

    return (
      <WrappedComponent show={storageChange} toggleShow={toggleShow} />
    );
  };
};
