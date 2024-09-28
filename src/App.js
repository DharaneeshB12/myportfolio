import './App.css';
import MyNavbar from './component/NavBar/MyNavbar';
import { About } from './component/About/About';
import MySkills from './component/Skills/MySkills';
import Projects from './component/Projects/Projects';
import Contacts from './component/Contact/Contacts';
import Footer from './component/Footer/Footer';
import Copyrights from './component/Footer/Copyrights';

function App() {
  return <>
  <MyNavbar/>
  <About/>
  <MySkills/>
  {/* <Projects/> */}
  <Contacts/>
  <Footer/>
  <Copyrights/>
  </>
}

export default App;
