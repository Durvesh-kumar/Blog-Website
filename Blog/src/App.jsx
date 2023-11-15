import { Outlet } from "react-router-dom";
import {Footer, Navbar} from './Components/index';

export default function App() {
  return (
    <div className="mt-14">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}
