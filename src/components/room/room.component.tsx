import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { FormOnWall } from "../form-on-wall";
import "./room.styles.scss";

export const Room: React.FC = () => {
  return (
    <div className="rootRoom">
      /* fov: Field of View */
      <Canvas camera={{ position: [-2, 1, 5], fov: 80 }}>
        <ambientLight intensity={1} />

        {/* THE ROOM BOX */}
        <mesh scale={[10, 10, 10]}>
          <boxGeometry />
          <meshStandardMaterial
            color="#111"
            side={THREE.BackSide} //   Render the inside walls
          />
        </mesh>
        <FormOnWall />
      </Canvas>
    </div>
  );
};
