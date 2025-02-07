export const Tooltip = ({
  children,
  tooltipContent,
  placement = "top",
  gap = 5,
  type = "default",
  size = "md",
  width = "max-content",
  style,
  zIndex = 999,
  className,
}: {
  children: React.ReactNode;
  tooltipContent: React.ReactNode;
  placement?:
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
  gap?: number;
  type?: "primary" | "secondary" | "warning" | "error" | "default" | "accent";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  width?: number | string;
  style?: React.CSSProperties;
  zIndex?: number;
  className?: string;
}) => (
  <div className="relative cursor-pointer group/wrapper">
    {children}
    <div
      className={`absolute transition-all duration-300 opacity-0 invisible group-hover/wrapper:visible group-hover/wrapper:opacity-100 delay-100 ${
        placement === "top" ? "left-1/2 -translate-x-1/2 bottom-full" : ""
      } ${placement === "topLeft" ? "right-full bottom-full" : ""} ${
        placement === "topRight" ? "left-full bottom-full" : ""
      } ${placement === "bottom" ? "left-1/2 -translate-x-1/2 top-full" : ""} ${
        placement === "left" ? "top-1/2 -translate-y-1/2 right-full" : ""
      } ${placement === "bottomLeft" ? "right-full top-full" : ""} ${
        placement === "left" ? "top-1/2 -translate-y-1/2 right-full" : ""
      } ${placement === "bottomRight" ? "left-full top-full" : ""} ${
        placement === "left" ? "top-1/2 -translate-y-1/2 right-full" : ""
      } ${placement === "leftTop" ? "bottom-full right-full" : ""} ${
        placement === "leftBottom" ? "top-full right-full" : ""
      } ${placement === "right" ? "top-1/2 -translate-y-1/2 left-full" : ""} ${
        type === "primary" ? "bg-sky-500 text-white" : ""
      } ${placement === "rightTop" ? "bottom-full left-full" : ""} ${
        type === "primary" ? "bg-sky-500 text-white" : ""
      } ${placement === "rightBottom" ? "top-full left-full" : ""} ${
        type === "primary" ? "bg-sky-500 text-white" : ""
      } ${type === "secondary" ? "bg-gray-500 text-white" : ""} ${
        type === "accent" ? "bg-cyan-500 text-white" : ""
      } ${type === "warning" ? "bg-yellow-500 text-white" : ""} ${
        type === "error" ? "bg-red-500 text-white" : ""
      } ${type === "default" ? "bg-gray-900 text-white" : ""} ${
        size === "xs" ? "text-xs p-0.5 rounded-xs" : ""
      } ${size === "sm" ? "text-sm p-1 rounded-sm" : ""} ${
        size === "md" ? "text-md p-1.5 rounded" : ""
      } ${size === "lg" ? "text-lg p-2 rounded-lg" : ""} ${
        size === "xl" ? "text-xl p-2.5 rounded-xl" : ""
      } ${className}`}
      style={{
        width,
        zIndex,
        ...(placement === "top" && { marginBottom: gap + "px" }),
        ...(placement === "left" && { marginRight: gap + "px" }),
        ...(placement === "right" && { marginLeft: gap + "px" }),
        ...(placement === "bottom" && { marginTop: gap + "px" }),
        ...style,
      }}
    >
      {tooltipContent}
    </div>
  </div>
);
