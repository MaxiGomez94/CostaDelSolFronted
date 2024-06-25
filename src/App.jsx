import NavMenu from "./components/layout/navbar/NavMenu";
import  './App.css'
import { AccountCircleOutlined, AddIcCallOutlined, AppRegistrationOutlined, DeckOutlined, HomeOutlined, ImageOutlined } from '@mui/icons-material';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/layout/footer/Footer";
import Register from "./components/admin/UserRegister/Register";


const linksDelNavbar = [
  {
    title: "Home",
    path: "/",
    icon: <HomeOutlined />
  },
  {
    title: "Galeria",
    path: "/galeria",
    icon: <ImageOutlined />
  },
  {
    title: "Habitaciones",
    path: "/habitaciones",
    icon: <DeckOutlined />
  },
  {
    title: "Contacto",
    path: "/contacto",
    icon: <AddIcCallOutlined />
  },
  {
    title: "Iniciar Sesion",
    path: "/login",
    icon: <AccountCircleOutlined />
  },
  {
    title: "Registro",
    path: "/registro",
    icon: <AppRegistrationOutlined />
  },
];


const App = () => {
  return (
    <>
      <NavMenu linksDelNavbar={linksDelNavbar}/>
      <div className="main">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registro" element={<Register/>}/>
      </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;