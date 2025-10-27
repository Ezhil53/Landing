import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";


const Noise = () => {
    const canvasRef = useRef(null);
    let offsetX = 0; // Horizontal offset for left movement
    let offsetY = 0; // Vertical offset for floating effect
    let floatDirection = 1; // Direction for floating (1 = down, -1 = up)

    useEffect(() => {
        // Smooth scrolling using Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Noise animation
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Generate random noise
        function generateNoise() {
            const imageData = ctx.createImageData(canvas.width, canvas.height);
            for (let y = 0; y < canvas.height; y++) {
                for (let x = 0; x < canvas.width; x++) {
                    const index = (x + y * canvas.width) * 4;
                    const color = Math.random() * 255;
                    imageData.data[index] = color;      // Red
                    imageData.data[index + 1] = color;  // Green
                    imageData.data[index + 2] = color;  // Blue
                    imageData.data[index + 3] = 30;     // Alpha (transparency)
                }
            }
            return imageData;
        }

        const noiseImage = generateNoise();

        // Animation loop
        function animateNoise() {
            // Update offsets for flying left and floating
            offsetX -= 0.5; // Adjust speed for smooth left movement
            offsetY += 0.1 * floatDirection; // Floating up and down

            // Reverse float direction at limits
            if (offsetY > 20 || offsetY < -20) floatDirection *= -1;

            // Loop the noise seamlessly
            if (offsetX <= -canvas.width) offsetX = 0;

            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw the noise image at the current offsets
            ctx.putImageData(noiseImage, offsetX, offsetY); // First block
            ctx.putImageData(noiseImage, offsetX + canvas.width, offsetY); // Second block for seamless movement

            requestAnimationFrame(animateNoise);
        }

        animateNoise();

        return () => lenis.destroy();
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute -top-10 left-0 w-full h-full opacity-30"
            />
        </div>
    );
};

export default Noise;