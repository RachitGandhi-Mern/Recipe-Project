
import './index.css';
import Nav from './Components/Nav';
import Mainroutes from './Routes/Mainroutes';


function App() {
  return (
    <div className="bg-black text-white h-screen w-screen">
      <Nav/>
      <Mainroutes/>
    </div>
  );
}

export default App;