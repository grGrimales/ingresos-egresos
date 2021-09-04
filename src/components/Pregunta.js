import React, { Fragment, useState } from "react";
import { Error } from "./Error";
import PropTypes from "prop-types";

export const Pregunta = ({
  setPresupuesto,
  setRestante,
  setMostrarPregunta,
}) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  //Funcion que lee el presupuesto

  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value));
  };

  //Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);

      return;
    }
    setError(false);

    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El monto no es válido" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};
Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setMostrarPregunta: PropTypes.func.isRequired,
};
