const expect = require('chai').expect;
const app = require('../app');

describe('App', function() {
    describe('General cases', function() {
        it('should return the type of the array', function() {
            let values = ['fakru', 'deen'];
            expect(app.addNumbers(values)).to.equal(0);
        });
    });

    describe('Addition cases', function() {
        it('should return the sum of the array of positive numbers', function() {
            let values = [1, 2, 3, 4];
            expect(app.addNumbers(values)).to.equal(10);
        });

        it('should return the sum of empty array', function() {
            let values = [];
            expect(app.addNumbers(values)).to.equal(0);
        });

        it('should return the sum of the array of positive&negative numbers', function() {
            let values = [-1, 1, -2, 3];
            expect(app.addNumbers(values)).to.equal(1);
        });

        it('should return the sum of the array of negative numbers', function() {
            let values = [-1, -10, -21, -3];
            expect(app.addNumbers(values)).to.equal(-35);
        });

        it('should return the sum of the array of zeros', function() {
            let values = [0, 0, 0];
            expect(app.addNumbers(values)).to.equal(0);
        });

        it('should return the sum of the array of single element', function() {
            let values = [8];
            expect(app.addNumbers(values)).to.equal(8);
        });
    });
});
