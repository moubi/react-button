import React from "react";
import Button from "./components/Button/Button";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Button size="small">Small</Button>
      <Button>Default</Button>
      <Button size="large">Large</Button>
      <Button disabled>Disabled</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
    </div>
  );
}
