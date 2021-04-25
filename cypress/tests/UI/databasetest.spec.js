describe('DB tests', () => {
    it("update db", () => {
        cy.task('querydb', 'UPDATE table SET status = 0 WHERE product = 5035;');
    });
});
