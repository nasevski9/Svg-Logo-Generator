const Circle  = require('./Circle.js');
const Square = require('./Square.js');
const Triangle = require('./Triangle.js');

function createShape(shape, color) {
    let logo;
    switch(shape) {
        case "Triangle":
            logo = new Triangle(color);
            break;
        case "Circle":
            logo = new Circle(color);
            break;
        case "Square":
            logo = new Square(color);
            break;
    }
    return logo;
}