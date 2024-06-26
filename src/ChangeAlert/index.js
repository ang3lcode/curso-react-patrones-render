import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css'

export const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>
            Parece que cambiaste tus TODOs en otra pestaña o ventana del
            navegador.
          </p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={() => toggleShow(false)}
          >
            volver a cargar
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
