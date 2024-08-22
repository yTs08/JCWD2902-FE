import { describe, it } from "node:test";
import { mount } from "cypress/react";
import Home from "./app/page";

describe("Home Page", () => {
  it("Renders Home Page", () => {
    mount(<Home />); //mount the component

    cy.get("h1").contains("Home Page"); //get the h1

    cy.get('a[href="/about"]').should("be.visible"); //get the link
  });

  it("Renders About Page", () => {
    mount(<AboutPage />); //mount the component

    cy.get("h1").contains("About Page"); //get the h1

    cy.get('a[href="/about"]').should("be.visible"); //get the link
  });
});
