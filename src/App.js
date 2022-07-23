// import logo from './logo.svg';
import './App.css';
import './style.css';

// My imports
import Main from "./components/Main";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Image from "./components/Image";

export default function App() {
    return (
        <div className="App">
            <Image />
            <Main />
            <Contact />
            <About />
            <Interests />
            <Footer />
        </div>
    );
}
