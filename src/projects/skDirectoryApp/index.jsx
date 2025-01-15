import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Retrieve from "./components/Retrieve";
import AddNewPerson from "./components/AddNewPerson";
import './style.css'

const DirectoryApp = () => {
    return (
        <div className="main">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<AddNewPerson />} />
                    <Route path="/retrieve" element={<Retrieve />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default DirectoryApp;