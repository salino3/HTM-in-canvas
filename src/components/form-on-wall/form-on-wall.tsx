import React from "react";
import { Html } from "@react-three/drei";
import styles from "./form-on-wall.module.scss";

export const FormOnWall: React.FC = () => {
  return (
    <group rotation={[0, -Math.PI / 4, 0]}>
      {/* 1. The Physical Wall (Optional, for shadows/occlusion) */}
      <mesh>
        <planeGeometry args={[4, 3]} />
        <meshStandardMaterial color="#222" transparent opacity={0.5} />
      </mesh>

      {/* 2. The HTML Layer */}
      <Html
        transform // This is the magic: it makes the HTML act like a 3D object
        occlude // (Optional) Makes it go behind other 3D objects
        distanceFactor={5} // Adjusts the "scale" of the HTML relative to 3D units
        position={[0, 0, 0.01]} // Slightly in front of the wall to prevent flickering
      >
        <form className={styles.formContainer}>
          <h1>Room Settings</h1>
          <input type="range" min="0" max="10" />
          <input type="text" placeholder="Wall Label..." />
          <button onClick={() => alert("Saved!")}>Save Changes</button>
        </form>
      </Html>
    </group>
  );
};
