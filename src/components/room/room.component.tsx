import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { FormOnWall } from "../form-on-wall";
import "./room.styles.scss";

export const Room: React.FC = () => {
  return (
    <div className="rootRoom">
      {/* fov: Field of View   */}
      <Canvas camera={{ position: [-2, 1, 5], fov: 80 }}>
        <color attach="background" args={["#111"]} />
        <fog attach="fog" args={["#ffb115", -2, 30]} />
        <ambientLight
          intensity={1}
          //  color="white"
        />
        {/* Add a PointLight to act like a lightbulb in the room */}
        <pointLight
          position={[0, 5, 0]}
          intensity={20}
          // color="white"
        />
        {/* THE ROOM BOX */}
        <mesh scale={[10, 10, 10]}>
          <boxGeometry />
          <meshStandardMaterial
            color="#c81c1c"
            side={THREE.BackSide} //   Render the inside walls
          />
        </mesh>

        {/* THE FORM: Mounted on the back wall (z = -5) */}
        <group position={[0, 0, -4.9]}>
          <FormOnWall />
        </group>

        {/* Allows you to drag the mouse to look around the room */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};
