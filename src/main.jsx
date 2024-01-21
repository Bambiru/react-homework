import { createRoot } from "react-dom/client";
import { Detail } from "./Detail";

const root = document.querySelector("#root");

const render = (
  <>
    <Detail />
  </>
);

createRoot(root).render(render);
