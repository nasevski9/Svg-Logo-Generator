// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/Circle');
const Square = require('./lib/Square');
const Triangle = require('./lib/Triangle');

const questions = [
    {
        type: 'input',
        message: 'What would you like to be the text in the logo (up to 3 letters)',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What color should the text be in',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Choose a shape',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        message: 'What color should the shape be',
        name: 'shapeColor'
    }
];
function init() {

    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            const shape = answers.shape;
            const color = answers.shapeColor;
            const createdShape = createShape(shape, color);
            const svgCode = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${createdShape}
    
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    
            </svg>
            `
            fs.writeFile('logo.svg', svgCode, (error) => {
                error ? console.log(error) : console.log('Generated logo.svg')
            })
        })

        function createShape(shape, color) {
            switch (shape) {
                case 'Triangle':
                    return new Triangle(color).render();
                case 'Circle':
                    return new Circle(color).render();
                case 'Square':
                    return new Square(color).render();
                default:
                    return '';
            }
        }
    }
    init();