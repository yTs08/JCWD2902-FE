/** @format */
import About from "./page";
import { mount } from "cypress/react";

describe("About Page", () => {
  it("Renders Home Page", () => {
    mount(<About />); // mount the component
    cy.get("h1").contains("About Page"); // get the h1
    cy.get('a[href="/"]').should("be.visible"); // get the link
  });
});
