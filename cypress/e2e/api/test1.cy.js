describe('Verify API response',()=>{

    const baseUrl=Cypress.env('API_BASE_URL');

    it('Verify that response body contains all the fields',()=>{
        cy.request(`${baseUrl}/users?/page=2`).then((response)=>{
            expect(response.status).to.eq(200);
            cy.log(typeof(Object.keys(response.body)));
            expect(Object.keys(response.body)).to.have.length(6);
        })
    })

})