class Square {
    constructor(color) {
        this.color = color;
    }
    render() {
        return `<rect x="10" y="10" width="300" height="200" fill="${this.color}"/>`
    }
}
module.exports = Square;