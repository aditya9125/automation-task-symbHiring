describe('Verify API Data',()=>{
    const baseUrl=Cypress.env('API_BASE_URL');
    it('Verify that response body contains all the fields',()=>{
        cy.request(`${baseUrl}/users?page=2`).then((response)=>{
            expect(response.status).to.eq(200);
            // cy.log(typeof(Object.keys(response.body)));
            expect((response.body.data).some(user=> user.first_name==='Michael')).to.be.true;
        })
    })
})