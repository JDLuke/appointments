import {matcherHint, printExpected, printReceived} from "jest-matcher-utils";

export const toBeInputFieldOfType = (received, type) => {

  const pass = received !== null && received.type === type && received.tagName === "INPUT";

  const sourceHint = () => matcherHint("toBeInputFieldOfType", "element", printExpected(type),{isNot: pass})
  const actualTextHint = () => "Actual type: " + printReceived(received);
  const message = () => [sourceHint(), actualTextHint()].join("\n\n");

  return {pass, message}
}