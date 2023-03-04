// import {toContainText} from "./toContainText";

import {toBeInputFieldOfType} from "./toBeInputFieldOfType";
import {stripTerminalColor} from "../reactTestExtensions";

describe('toBeInputFieldOfType matcher', () => {
  const displayElement = {type: "text", tagName: "DISPLAY"};

  it("returns pass is true when field is of input type", () => {
    const domElement = {type: "text", tagName: "INPUT"};
    const result = toBeInputFieldOfType(domElement, "text");
    expect(result.pass).toBe(true);
  })

  it("returns pass is false when type is not text", () => {
    const domElement = {type: "numeric", tagName: "INPUT"};
    const result = toBeInputFieldOfType(domElement, "text");
    expect(result.pass).toBe(false);
  })
  it("returns correct message when type is not text", () => {
    const domElement = {type: "numeric", tagName: "INPUT"};
    const result = toBeInputFieldOfType(domElement, "text");
    expect(result.pass).toBe(false);
  })

  it("returns pass is false when not an input field", () => {
    const result = toBeInputFieldOfType(displayElement, "text");
    expect(result.pass).toBe(false);
  });
  it("returns correct message when not an input field", () => {
    const result = toBeInputFieldOfType(displayElement, "text");
    expect(stripTerminalColor(result.message())).toContain(`Actual type: "DISPLAY"`)
  })

  it("returns correct message when not an input field", () => {
    const result = toBeInputFieldOfType(displayElement, "text");
    expect(stripTerminalColor(result.message())).toContain(`expect(element).toBeInputFieldOfType("text")`)
  })

  it("returns pass is false when null", () => {
    const result = toBeInputFieldOfType(null, "text");
    expect(result.pass).toBe(false);
  });

  it("returns correct message when null", () => {
    const result = toBeInputFieldOfType(null, "text");
    expect(stripTerminalColor(result.message())).toContain(`expect(element).toBeInputFieldOfType("text")`)
  })

  it("returns correct actual when null", () => {
    const result = toBeInputFieldOfType(null, "text");
    expect(stripTerminalColor(result.message())).toContain(`Actual type: "null"`)
  })

})