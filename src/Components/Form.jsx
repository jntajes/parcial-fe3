import { useState } from "react";
import Card from "./Card";

const Form = () => {
  //   Estados iniciales necesarios
  const [customer, setCustomer] = useState({
    nombre: "",
    color: "",
  });
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  //   Manejo de inputs
  const handleChangeNombre = (event) => {
    setCustomer({ ...customer, nombre: event.target.value });
  };
  const handleChangeColor = (event) => {
    setCustomer({ ...customer, color: event.target.value });
  };

  //   Manejo y validación de formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    const { nombre, color } = customer;

    if (nombre.trim().length < 3 || color.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      setShow(false);
    } else {
      setError("");
      setShow(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="vertical-form">
        <label>Nombre: </label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={customer.nombre}
          onChange={handleChangeNombre}
        />
        <label>Color: </label>
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={customer.color}
          onChange={handleChangeColor}
        />
        <button type="submit">Enviar</button>
      </form>

      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : show ? (
        <Card nombre={customer.nombre} color={customer.color} />
      ) : null}
    </div>
  );
};

export default Form;
