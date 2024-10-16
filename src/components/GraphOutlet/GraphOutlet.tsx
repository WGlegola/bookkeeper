import { GraphCanvas, darkTheme } from "reagraph";
import { Canvas } from "./styled";
const GraphOutlet = () => {
  const nodes = [
    {
      id: "1",
      label: "1",
    },
    {
      id: "2",
      label: "2",
    },
  ];

  const edges = [
    {
      source: "1",
      target: "2",
      id: "1-2",
      label: "1-2",
    },
    {
      source: "2",
      target: "1",
      id: "2-1",
      label: "2-1",
    },
  ];
  return (
    <Canvas>
      <GraphCanvas nodes={nodes} edges={edges} theme={darkTheme} />
    </Canvas>
  );
};

export default GraphOutlet;
