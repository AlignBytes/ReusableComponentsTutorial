import { Tooltip } from "./components/Tooltip";

export default function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
      <Tooltip
        tooltipContent="This is a tooltip"
        // placement="bottomRight"
        // gap={25}
        // type="error"
        // size="xl"
      >
        Hover Me
      </Tooltip>
    </div>
  );
}
