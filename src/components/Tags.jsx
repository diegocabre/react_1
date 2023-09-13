import Badge from 'react-bootstrap/Badge';

function Tags({ colorBoton, textoBoton }) {
  return (
    <>
      <Badge pill bg={colorBoton}>{textoBoton}</Badge>
    </>
  );
}

export default Tags;