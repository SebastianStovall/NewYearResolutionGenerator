// import React, { useState } from "react";
// import styles from '../../pages/index.module.css'; // Import your CSS styles

// const FireworkButton = () => {
//     const [particles, setParticles] = useState([]);

//     const randomLocation = () => ({
//       x: Math.random() * window.innerWidth + 'px',
//       y: Math.random() * window.innerHeight + 'px',
//     });

//     const randomColor = () => `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;

//     const addParticle = () => {
//       const color = randomColor();
//       const { x, y } = randomLocation();

//       setParticles((prevParticles) => [
//         ...prevParticles,
//         {
//           x,
//           y,
//           color,
//           key: Math.random(),
//           explosionX: Math.random() * 200 - 100 + 'px',
//           explosionY: Math.random() * 200 - 100 + 'px',
//           explosionDuration: Math.random() * 300 + 200 + 'ms',
//         },
//       ]);
//     };

//     const handleFirework = () => {
//       for (let i = 0; i < 100; i++) {
//         addParticle();
//       }

//       setTimeout(() => {
//         setParticles([]);
//       }, 500);
//     };

//     return (
//       <button
//         onClick={handleFirework}
//         className={`${styles.resolutionButton} ${styles.fireworkButton}`}
//       >
//         Generate Me A Resolution
//         {particles.map((particle) => (
//           <span
//             key={particle.key}
//             className={`${styles.particle} ${styles.move}`}
//             style={{
//               '--x': particle.explosionX || particle.x,
//               '--y': particle.explosionY || particle.y,
//               animationDuration: particle.explosionDuration || 'inherit',
//               background: particle.color,
//             }}
//           ></span>
//         ))}
//       </button>
//     );
//   };

//   export default FireworkButton;
