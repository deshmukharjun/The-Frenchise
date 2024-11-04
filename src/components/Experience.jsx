import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
export const Experience = () => {
  return (
    <>
      <Float
        rotation-x={-Math.PI / 10}
        floatIntensity={0.1}
        speed={1}
        rotationIntensity={1}
      >
      <Book />
      </Float>
      <OrbitControls />
      <Environment preset="studio"></Environment>
    </>
  );
};
