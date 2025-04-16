import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Element_ex from "./ch0409/Element_ex";
import NameForm from "./ch0409/NameForm_ex";
import SignUp from "./ch0416/SignUp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Element_ex />
    <SignUp />
  </StrictMode>
);
