const lib = require('./../dist/index');

const expect = require('chai').expect;

describe('<%= projectName %> tests', () => {
    
    it('Suma correcta', () => {
        
        expect(1 + 1).to.equal(2);
    });
});