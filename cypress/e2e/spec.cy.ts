import "@testing-library/cypress/add-commands";

describe("Given a LibraryPage page", () => {
  describe("When it is rendered and show a book with title 'El Señor de los Anillos'", () => {
    it("Then it should show a button with text 'Añadir lista lectura' or 'Quitar lista lectura' text", () => {
      cy.viewport(320, 580);
      const bookTitle1 = "Apocalipsis Zombie";
      const bookTitle2 = "Dune";
      const bookTitle3 = "Neuromante";
      const bookTitle4 = "Drácula";
      cy.visit("http://localhost:5173");

      cy.contains(bookTitle1)
        .closest("li")
        .should("be.visible")
        .within(() => {
          cy.findByRole("button", { name: /Añadir lista lectura/i }).click();
        });

      cy.get('img[alt="lista lectura"]').click();
      cy.get('img[alt="icono de home"').click();

      cy.contains(bookTitle2)
        .closest("li")
        .should("be.visible")
        .within(() => {
          cy.findByRole("button", { name: /Añadir lista lectura/i }).click();
        });

      cy.contains(bookTitle3)
        .closest("li")
        .should("be.visible")
        .within(() => {
          cy.findByRole("button", { name: /Añadir lista lectura/i }).click();
        });

      cy.contains(bookTitle4)
        .closest("li")
        .should("be.visible")
        .within(() => {
          cy.findByRole("button", { name: /Añadir lista lectura/i }).click();
        });

      cy.get('img[alt="lista lectura"]').click();

      cy.get('img[alt="icono de contacto"]').click();
      cy.get(".map-container").should("exist").should("be.visible");
      cy.get(".gm-control-active").click({ multiple: true, force: true });

      cy.get('img[alt="icono de home"').click();

      cy.contains(bookTitle1)
        .closest("li")
        .should("be.visible")
        .within(() => {
          cy.findByRole("button", { name: /Quitar lista lectura/i }).click();
        });

      cy.contains(bookTitle3)
        .closest("li")
        .should("be.visible")
        .within(() => {
          cy.findByRole("button", { name: /Quitar lista lectura/i }).click();
        });

      cy.get('img[alt="lista lectura"]').click();
    });
  });
});
