import NavBar from "./components/NavBar";
import Intro  from "./components/Intro";
import Proyectos from "./components/Proyectos";
import Formacion from "./components/Formacion";
import Footer from "./components/Footer";
import Tegnologias from "./components/Tegnologias";
import {Box} from '@chakra-ui/react'

function App() {
  return (
    <>
    
      <NavBar/>
      <Intro/>
      <Proyectos/>
      <Tegnologias/>
      <Formacion/>
      <Footer/>

    </>
  );
}

export default App;
