const Circle = require('./Circle.js');
const circle = require('./Circle.js');
const square = require('./Square.js');
const Square = require('./Square.js')
const Triangle = require('./Triangle.js');
const triangle = require('./Triangle.js');

describe('Circle', () => {
    it('should be an instance of Circle class', () => {
        const circle = new Circle();
        expect(circle).toBeInstanceOf(Circle);
    })
    it('should have own color', () => {
        const circle = new Circle('red');
        expect(circle.color).toBe('red');
    })
    it('should have a method render that works properly', () => {
        const circle = new Circle('red');
        expect(circle.render()).toBe('<circle cx="100" cy="75" r="70" fill="red"/>')
    })
})
describe('Triangle', () => {
    it('should be an instance of Triangle class', () => {
        const triangle = new Triangle();
        expect(triangle).toBeInstanceOf(Triangle);
    })
    it('should have own color', () => {
        const triangle = new Triangle('red');
        expect(triangle.color).toBe('red');
    })
    it('should have a method render that works properly', () => {
        const triangle = new Triangle('red');
        expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="red" />')
    })
})
describe('Square', () => {
    it('should be an instance of Square class', () => {
        const square = new Square();
        expect(square).toBeInstanceOf(Square);
    })
    it('should have own color', () => {
        const square = new Square('red');
        expect(square.color).toBe('red');
    })
    it('should have a method render that works properly', () => {
        const square = new Square('red');
        expect(square.render()).toBe('<rect x="10" y="10" width="300" height="200" fill="red"/>')
    })
})