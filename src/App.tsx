import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { FormOnWall } from "./components";

function App() {
  const h1Ref = useRef<HTMLHeadingElement>(null!);

  useEffect(() => {
    // 1. Find the canvas element
    const canvas = document.querySelector("canvas");
    if (canvas && h1Ref.current) {
      // 2. Manually move the H1 inside the canvas tag
      canvas.appendChild(h1Ref.current);
      // 3. Set the required flag
      canvas.setAttribute("layoutsubtree", "");
    }
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#111" }}>
      {/* THIS IS THE RAW HTML - Standard React DOM */}
      <h1
        ref={h1Ref}
        {...({ layoutsubtree: "" } as any)}
        style={{
          position: "absolute",
          transform: "translate(-10000px, -10000px)", // Hide from screen
          background: "white",
          color: "blue",
          padding: "20px",
          fontSize: "64px",
          fontFamily: "sans-serif",
        }}
      >
        HELLO CANVAS
      </h1>

      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <FormOnWall elementRef={h1Ref} />
      </Canvas>
    </div>
  );
}

export default App;
