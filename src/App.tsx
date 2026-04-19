import { Canvas } from "@react-three/fiber";
import { FormOnWall } from "./components";
import "./App.scss";
import { AppRoutes } from "./router/app-router";

function App() {
  return (
    <div className="rootApp">
      {/* fov: Field of View */}
      {/* <Canvas camera={{ position: [-2, 1, 5], fov: 80 }}>
        <ambientLight intensity={1} />
        <FormOnWall />
      </Canvas> */}
      <AppRoutes />
    </div>
  );
}

export default App;
