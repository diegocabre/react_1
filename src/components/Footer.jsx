const Footer = ({texto="Adoptar es un gran paso. Hay muchos aspectos que debes considerar previamente, desde elegir el tipo de mascota más adecuada para tu estilo de vida, hasta decidir dónde o con quién adoptar. Por eso queremos ayudarte para que ésta sea una de las mejores experiencias en tu vida y la de tu próximo amigo de cuatro patas."}) => {
    return (
        <div className="footer">
            <p className="texto">{texto}</p>
        </div>
    );
};

export default Footer