import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Tags from "./components/Tags";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <div className="appcontenedor">
        <Card
          imagen="https://images.pexels.com/photos/2171583/pexels-photo-2171583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          nombre="Pug"
          descripcion="Son los favoritos de las familias debido a su temperamento, personalidad juguetona y a su disposición amorosa y abierta"
          boton={"Adoptar"} />
        <Card
          imagen="https://images.pexels.com/photos/1933464/pexels-photo-1933464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          nombre="Chiguagua"
          descripcion="Son excelentes perros de compañía. Les gusta que les presten atención y son fieles a sus propietarios. Son perros muy  activos y les gusta estar ocupados."
          boton={"Adoptar"} />
        <Card
          imagen="https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          nombre="Chow Chows"
          descripcion="Los chow chows son bastante inteligentes, son inmensamente protectores y necesitan el adiestramiento para controlar esta tendencia guardiana."
          boton={"Adoptar"} />
        <Card
          imagen="https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1600"
          nombre="Salchicha (Dachshund)"
          descripcion="Su cuerpo alargado, las piernas cortas y las garras afiladas convirtieron a los dachshund en magníficos excavadores y cazadores subterráneos"
          boton={"Adoptar"} />
      </div>
      <Footer />
    </>
  );
}

export default App;