import { Accordion } from "./components/Accordion";

export default function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="w-1/4">
        <Accordion
          content={[
            {
              header: "Default",
              content: (
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                  est error id doloribus quasi cum impedit quam iure magni illum
                  officia, omnis, enim alias, sit quidem eveniet quo facilis
                  fuga!
                </p>
              ),
            },
            {
              header: "Warning",
              content: (
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur, earum eos magni deserunt mollitia veniam nam sed
                  excepturi cumque. Autem voluptas eaque omnis est sapiente
                  laboriosam fugiat iure sed cumque?
                </p>
              ),
              type: "warning",
            },
            {
              header: "error",
              content: (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis esse, natus velit eos hic atque! Debitis eligendi
                  harum voluptas ab eaque unde nesciunt, natus facere sint rem
                  autem placeat obcaecati.
                </p>
              ),
              type: "error",
            },
          ]}
        />
      </div>
    </div>
  );
}
