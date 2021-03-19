import expect, { mount, simulate } from "../../test-utils/unexpected-react";
import React from "react";
import sinon from "sinon";

import Button from "./Button";

describe("Button", () => {
  it("should render with text", () => {
    expect(
      <Button>I am a button</Button>,
      "when mounted",
      "to have text",
      "I am a button"
    );
  });

  it("should render with markup", () => {
    expect(
      <Button>
        <span>Download</span>
        <span>⬇️</span>
      </Button>,
      "when mounted",
      "to satisfy",
      <button>
        <span>Download</span>
        <span>⬇️</span>
      </button>
    );
  });

  it("should render as primary", () => {
    expect(
      <Button color="primary">I am a button</Button>,
      "when mounted",
      "to have class",
      "primary"
    );
  });

  it("should render as secondary", () => {
    expect(
      <Button color="secondary">I am a button</Button>,
      "when mounted",
      "to have class",
      "secondary"
    );
  });

  it("should render as small", () => {
    expect(
      <Button size="small">I am a button</Button>,
      "when mounted",
      "to have class",
      "small"
    );
  });

  it("should render as large", () => {
    expect(
      <Button size="large">I am a button</Button>,
      "when mounted",
      "to have class",
      "large"
    );
  });

  it("should render as disabled", () => {
    expect(
      <Button disabled>Disabled button</Button>,
      "when mounted",
      "to have attributes",
      {
        disabled: true,
      }
    );
  });

  it("should NOT trigger click if disabled", () => {
    const handleClick = sinon.stub();

    const component = mount(
      <Button onClick={handleClick} disabled>
        Press
      </Button>
    );

    simulate(component, { type: "click" });

    expect(handleClick, "was not called");
  });

  it("should trigger click", () => {
    const handleClick = sinon.stub();

    const component = mount(<Button onClick={handleClick}>Click here</Button>);

    simulate(component, { type: "click" });

    expect(handleClick, "was called");
  });
});
