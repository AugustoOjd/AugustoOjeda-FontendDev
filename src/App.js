import NavBar from "./components/NavBar";
import Intro  from "./components/Intro";
import Proyectos from "./components/Proyectos";
import Formacion from "./components/Formacion";
import Footer from "./components/Footer";
import Tegnologias from "./components/Tegnologias";
import TimeBox from "./components/TimeBox";

function App() {
  return (
    <div >
      <NavBar/>
      <TimeBox/>
      <Intro/>
      <Proyectos/>
      <Tegnologias/>
      <Formacion/>
      <Footer/>
    </div>
  );
}

export default App;
