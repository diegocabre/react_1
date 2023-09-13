const Card = ({ imagen, nombre, descripcion, boton }) => {
    return (
        <>
            <div className='card'>
                <img className='imagen' src={imagen} alt={nombre} />
                <div className='contenido'>
                    <h2>{nombre}</h2>
                    <p>{descripcion}</p>
                </div>
                <div>
                    <button className='boton'>{boton}</button>
                </div>
            </div>
        </>
    );
};
export default Card