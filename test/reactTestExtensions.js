import {act} from "react-dom/test-utils";
import ReactDOM from "react-dom/client";

let container;
export const initializeReactContainer = () => {
  container = document.createElement("div");
  document.body.replaceChildren(container);
}
export const render = component => {
  act(() => ReactDOM.createRoot(container).render(component))
}

export const click = button => {
  act(() => button.click());
}

export const element = (selector) => document.querySelector(selector);
export const elements = (selector) => Array.from(document.querySelectorAll(selector))
export const typesOf = (elements) => elements.map((element) => element.type);
export const textOf = (elements) => elements.map((element) => element.textContent);
export const form = () => element("form");
export const field = (fieldName) => form().elements[fieldName];
// This 'bubbles' property ensures that the submitted event 'bubbles up' to our container element
// It's a react thing.
export const submit = (formElement) => {
  const event = new Event("submit", { bubbles: true, cancelable: true });
  act(()=>formElement.dispatchEvent(event));
  return event;
}
export const submitButton = () => element("input[type=submit]");

const originalValueProperty = (reactElement) => {
  const prototype = Object.getPrototypeOf(reactElement);
  return Object.getOwnPropertyDescriptor(prototype, "value");
}
export const change = (target, value) => {
  originalValueProperty(target).set.call(target, value);
  const event = new Event("change", { target, bubbles: true});
  act(() => target.dispatchEvent(event));
}

export const labelFor = (fieldName) => element(`label[for=${fieldName}]`); //import {field} from "../reactTestExtensions";
// expect(field(fieldName)).toBeInputFieldOfType("text");
export const stripTerminalColor = (text) => text.replace(/\x1B\[\d+m/g, "");