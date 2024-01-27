import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { Detail } from "./Detail";

const root = document.querySelector("#root");

const render = (
  <>
    <Header />
    <Detail />
  </>
);

createRoot(root).render(render);
