// import {toContainText} from "./toContainText";

import {toBeInputFieldOfType} from "./toBeInputFieldOfType";
import {stripTerminalColor} from "../reactTestExtensions";

describe('toBeInputFieldOfType matcher', () => {
  const displayElement = {type: "text", tagName: "DISPLAY"};
  const numberElement = {type: "numeric", tagName: "INPUT"};
  const textInput = {type: "text", tagName: "INPUT"}
  it("returns pass is true when field is of expected input type", () => {
    expect(toBeInputFieldOfType(textInput, "text").pass).toBe(true);
  })

  it("returns pass is false when type is not text", () => {
    expect(toBeInputFieldOfType(numberElement, "text").pass).toBe(false);
  })
  it("returns correct message when type is not text", () => {
    expect(toBeInputFieldOfType(numberElement, "text").pass).toBe(false);
  })
  it("returns correct message when type is not text", () => {
    expect(toBeInputFieldOfType(numberElement, "text").pass).toBe(false);
  })

  it("returns pass is false when not an input field", () => {
    expect(toBeInputFieldOfType(displayElement, "text").pass).toBe(false);
  });
  it("returns correct message when not an input field", () => {
    expect(stripTerminalColor(toBeInputFieldOfType(displayElement, "text").message())).toContain(`Actual type: "DISPLAY"`)
  })

  it("returns correct message when not an input field", () => {
    expect(stripTerminalColor(toBeInputFieldOfType(displayElement, "text").message())).toContain(`expect(element).toBeInputFieldOfType("text")`)
  })

  it("returns pass is false when null", () => {
    expect(toBeInputFieldOfType(null, "text").pass).toBe(false);
  });

  it("returns correct message when null", () => {
    expect(stripTerminalColor(toBeInputFieldOfType(null, "text").message())).toContain(`expect(element).toBeInputFieldOfType("text")`)
  })

  it("returns correct actual when null", () => {
    expect(stripTerminalColor(toBeInputFieldOfType(null, "text").message())).toContain(`Actual type: "null"`)
  })
})