import React, { useState, type Dispatch, type SetStateAction } from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import styles from "./form-on-wall.module.scss";
import type { RoomValues } from "../room/room.component";

interface Props {
  roomValues: RoomValues;
  setRoomValues: Dispatch<SetStateAction<RoomValues>>;
}

interface DataForm {
  shadeRoom: 1;
  label: "";
}

export const FormOnWall: React.FC<Props> = ({ roomValues, setRoomValues }) => {
  const [dataForm, setDataForm] = useState<DataForm>({
    shadeRoom: 1,
    label: "",
  });

  const handleFormData = (key: keyof DataForm) => (e: any) => {
    const { value } = e.target;

    setDataForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  //
  function handleSubmit(e: any) {
    e.preventDefault();

    if (dataForm.label) {
      setRoomValues(dataForm);
      setDataForm({
        shadeRoom: 1,
        label: "",
      });
    }
  }

  return (
    // <group rotation={[0, -Math.PI / 4, 0]}> // Give it rotation
    // to keep it flat against the wall
    <group rotation={[0, 0, 0]}>
      {/* 1. The Physical Wall (Optional, for shadows/occlusion) */}
      <mesh>
        <planeGeometry args={[4, 3]} />
        <meshBasicMaterial
          color="#6e6666f8"
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* 2. The HTML Layer */}

      <Html
        transform // This is the magic: it makes the HTML act like a 3D object
        occlude // (Optional) Makes it go behind other 3D objects
        distanceFactor={5} // Adjusts the "scale" of the HTML relative to 3D units
        position={[0, 0, 0.1]} // Slightly in front of the wall to prevent flickering
        pointerEvents="auto"
        className={styles.html}
      >
        <h2>Label: {roomValues.label}</h2>
        <form
          onSubmit={handleSubmit}
          // Stop the click from "bubbling" up to the OrbitControls
          // onPointerDown={(e) => e.stopPropagation()}
          className={styles.formContainer}
        >
          <div className={styles.boxTitleAndBG}>
            <h1 className="title">Room Settings</h1>
            <div
              className={styles.bg}
              style={{
                backgroundColor: `rgb(${100 + dataForm.shadeRoom * 7}, 28, 28)`,
                boxShadow: `
      0 0 ${dataForm.shadeRoom * 2}px rgba(200, 28, 28, 0.8), 
      0 0 ${dataForm.shadeRoom * 5}px rgba(200, 28, 28, 0.4)
    `,
                transition: "background-color 0.2s ease, box-shadow 0.2s ease",
              }}
            />
          </div>
          <label htmlFor="shadeRoom">Shade Room</label>
          <input
            id="shadeRoom"
            name="shadeRoom"
            type="range"
            min="0"
            max="20"
            value={dataForm.shadeRoom}
            onChange={handleFormData("shadeRoom")}
            // don't turn the room using range input
            onPointerDown={(e) => e.stopPropagation()}
          />
          <label htmlFor="label">Label</label>
          <input
            type="text"
            onChange={handleFormData("label")}
            name="label"
            value={dataForm.label}
            placeholder="Wall Label..."
          />
          <button className={styles["button"]} type="submit">
            Save Changes
          </button>
        </form>
      </Html>
    </group>
  );
};
