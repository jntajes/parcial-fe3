const Card = ({ nombre, color }) => {
  return (
    <div className="cardstyle">
      <h3>Hola {nombre}!</h3>
      <p>Veo que tu color favorito es {color}</p>
    </div>
  );
};

export default Card;