// import {toContainText} from "./toContainText";

import {toBeInputFieldOfType} from "./toBeInputFieldOfType";
//import {field} from "../reactTestExtensions";
// expect(field(fieldName)).toBeInputFieldOfType("text");
const stripTerminalColor = (text) => text.replace(/\x1B\[\d+m/g,"");

describe('toBeInputFieldOfType matcher', () => {
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
    const domElement = {type: "text", tagName: "DISPLAY"};
    const result = toBeInputFieldOfType(domElement, "text");
    expect(result.pass).toBe(false);
  });
  it("returns correct message when not an input field", () => {
    const domElement = {type: "text", tagName: "DISPLAY"};
    const result = toBeInputFieldOfType(domElement, "text");
    expect(stripTerminalColor(result.message())).toContain(`expect(element).toBeInputFieldOfType("text")`)
  })

  it("returns pass is false when null", () => {
    const domElement = null;
    const result = toBeInputFieldOfType(domElement, "text");
    expect(result.pass).toBe(false);
  });
  it("returns correct message when null", () => {
    const domElement = null;
    const result = toBeInputFieldOfType(domElement, "text");
    expect(stripTerminalColor(result.message())).toContain(`expect(element).toBeInputFieldOfType("text")`)
  })

})