import add from '../js/testFunction';
describe('Calculator', () => {
   it('should add two numbers', () => {

       expect(add(4,5)).toBe(9);
   });

});