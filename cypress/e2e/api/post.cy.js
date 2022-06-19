

describe('api testing', () => {
  it('post data from graphql', () => {
    cy.request('POST', 'http://localhost:4000/graphql', { query: "{ hello }" }).then((res) => {
      expect(res).to.have.property('status', 200);
      expect(res.body).to.not.be.null;
      expect(res.body.data).to.deep.equal({ hello: 'Hello world!' })


    });
  });
});
