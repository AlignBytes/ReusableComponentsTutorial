import { useState } from "react";

type AccordionProps = {
  /**
   * The content of the accordion, which is an array of objects.
   * Each object has the following properties:
   * - `header`: The header of the accordion item.
   * - `content`: The content of the accordion item.
   * - `type`: The type of the accordion item. Can be "default", "warning", or "error".
   */
  content: {
    /**
     * The header of the accordion item.
     */
    header: React.ReactNode;
    /**
     * The content of the accordion item.
     */
    content: React.ReactNode;
    /**
     * The type of the accordion item. Can be "default", "warning", or "error".
     */
    type?: "default" | "warning" | "error";
  }[];
};

/**
 * Reusable accordion component.
 * @param {AccordionProps} props - The props for the Accordion component.
 * @returns {JSX.Element | null} - The Accordion component.
 */
export const Accordion = ({
  content = [],
}: AccordionProps): JSX.Element | null => {
  const [isCurrentOpen, setIsCurrentOpen] = useState<number | null>(null);

  const handleClick = (accordionIndex: number) =>
    setIsCurrentOpen((prev) =>
      prev === accordionIndex ? null : accordionIndex
    );

  return Array.isArray(content) && content.length > 0 ? (
    <div className="w-full grid overflow-hidden">
      {content.map(({ header, content, type }, accordionIndex) => (
        <div
          key={accordionIndex}
          className={`overflow-hidden grid relative transition-all duration-200 ease-in-out pl-2.5 p-1 w-full before:content-[''] before:w-1 before:h-full before:absolute before:top-0 before:left-0 ${
            type === "error"
              ? "bg-red-100 before:bg-red-500 shadow shadow-red-900"
              : type === "warning"
              ? "bg-amber-50 before:bg-amber-400 shadow shadow-amber-900"
              : "bg-sky-50 before:bg-sky-500 shadow shadow-sky-900"
          } ${
            isCurrentOpen === accordionIndex
              ? "grid-rows-[auto_1fr]"
              : "grid-rows-[auto_0fr]"
          }`}
        >
          <header
            className={`capitalize w-full h-fit font-semibold flex items-center justify-between cursor-pointer relative after:content-['+'] after:absolute after:right-2 after:font-semibold after:flex after:items-center after:justify-center after:size-5 after:text-[1.5rem] after:overflow-hidden after:transition-all after:duration-200 after:ease-linear ${
              isCurrentOpen === accordionIndex ? "after:rotate-45" : ""
            } ${
              type === "error"
                ? "text-red-700"
                : type === "warning"
                ? "text-amber-700"
                : "text-sky-700"
            }`}
            onClick={() => handleClick(accordionIndex)}
          >
            {header}
          </header>
          {isCurrentOpen === accordionIndex ? (
            <hr
              className={
                type === "error"
                  ? "border-red-200"
                  : type === "warning"
                  ? "border-amber-200"
                  : "border-sky-200"
              }
            />
          ) : null}
          <main className="flex-1 overflow-auto">{content}</main>
        </div>
      ))}
    </div>
  ) : null;
};
