import React from "react";
import { loadSlim } from "@tsparticles/slim"; // Import slim version
import Particles from "@tsparticles/react";   // Import the React component

const ParticlesComponent = () => {
    const particlesInit = async (main) => {
        // Initialize the slim version
        await loadSlim(main);
    };

    const particlesOptions = {
        particles: {
            number: {
                value: 50,
            },
            size: {
                value: 3,
            },
            move: {
                speed: 1,
            },
            shape: {
                type: "circle",
            },
            color: {
                value: "#ffffff",
            },
        },
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
        />
    );
};

export default ParticlesComponent;
