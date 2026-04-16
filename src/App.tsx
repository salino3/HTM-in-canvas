import { Canvas } from "@react-three/fiber";
import { FormOnWall } from "./components";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#111" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <FormOnWall />
      </Canvas>
    </div>
  );
}

export default App;
