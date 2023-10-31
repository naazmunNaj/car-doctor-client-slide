
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <>
     <nav>
     <Navbar></Navbar>
     </nav>
      <main style ={{minHeight: "calc(100vh-264px"}}>
      <Outlet></Outlet>
      </main>
      <footer>
      <Footer></Footer>
      </footer>
        </>
    );
};

export default MainLayout;