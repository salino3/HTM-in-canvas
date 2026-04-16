import { Canvas } from "@react-three/fiber";
import { FormOnWall } from "./components";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#111" }}>
      {/* fov: Field of View */}
      <Canvas camera={{ position: [-2, 1, 5], fov: 80 }}>
        <ambientLight intensity={1} />
        <FormOnWall />
      </Canvas>
    </div>
  );
}

export default App;
