import "./App.css";
import Career from "./pages/Career";
import {Routes,Route} from 'react-router-dom';
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Domains from "./pages/Domains";
import Courses from "./pages/Courses";
import CollegeListing from "./pages/CollegeListing";
import PortalHeader from "./components/PortalHeader"
import PortalFooter from "./components/PortalFooter";

function App() {
  return (
    <>  
   <PortalHeader/>
    <Routes>
      <Route path="/" element={<Career/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="domains/courses/:domainID" element={<Courses/>}></Route>
      <Route path="domains" element={<Domains/>}></Route>
      <Route path="/college/:domainID/:courseID/:subcourseID/:cutoffmark/:community" element={<CollegeListing/>}></Route>
     
      <Route path="*" element={<NoMatch/>}></Route>
    </Routes>
    <div footer--pin>
    <PortalFooter/>
    </div>
    </>
  );
}

export default App;
