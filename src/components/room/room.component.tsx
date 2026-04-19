import { Canvas } from "@react-three/fiber";
import { FormOnWall } from "../form-on-wall";
import "./room.styles.scss";

export const Room: React.FC = () => {
  return (
    <div className="rootRoom">
      /* fov: Field of View */
      <Canvas camera={{ position: [-2, 1, 5], fov: 80 }}>
        <ambientLight intensity={1} />
        <FormOnWall />
      </Canvas>
    </div>
  );
};
