/** @format */
import AboutPage from "./about/page";
import Home from "./page";
import { mount } from "cypress/react";

describe("Home Page", () => {
  it("Renders Home Page", () => {
    mount(<Home />); // mount the component
    cy.get("h1").contains("Home Page"); // get the h1
    cy.get('a[href="/about"]').should("be.visible"); // get the link
  });
});
