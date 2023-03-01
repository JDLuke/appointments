import React from "react";
import {form, initializeReactContainer, render} from "./reactTestExtensions";
import {CustomerForm} from "../src/CustomerForm";

describe("CustomerForm", () => {
  beforeEach(() => {
    initializeReactContainer();
  });

  it("renders a form", () => {
    render(<CustomerForm />);
    expect(form()).not.toBeNull();
  })
});