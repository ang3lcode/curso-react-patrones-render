import React from "react";
import { withStorageListener } from "./withStorageListener";

export const ChangeAlert = ({show, toggleShow}) => {
  if (show) {
    return (
      <div>
        <p>hubo cambios </p>
        <button onClick={() => toggleShow(false)}>volver a cargar</button>
      </div>
    );
  } else {
    return null;
  }
};

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
