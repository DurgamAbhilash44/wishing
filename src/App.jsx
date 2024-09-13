import './App.css';

import MovingButton from "./components/MovingButton.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Particles from './components/Particles.jsx';
import ParticlesComponent from "./components/ParticlesComponent.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MovingButton />} />

            </Routes>

            <ParticlesComponent/>
        </BrowserRouter>
    );
}

export default App;
